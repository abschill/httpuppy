export * from './types';
import { readdir, readFile } from 'fs/promises';
import { resolve } from 'path';
import { MountedVFSFile, MountedVFS } from './types';
import mime_type from 'mime-types';

export async function* get_files(
    href: string,
    dir: string
): AsyncGenerator<MountedVFSFile> {
    const dirents = await readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            yield* get_files(href, res);
        } 
        else {
            const hrefs = [];
            const fname = res.split('/').pop();
            if(fname === 'index.html') hrefs.push(href);
            hrefs.push(`${href}${fname}`);
            const _mime_type = mime_type.contentType(<string>fname).toString();
            if(!_mime_type.includes('text')) {
                yield {
                    hrefs,
                    mime_type: _mime_type,
                    _filename: <string>fname,
                    _basepath: dir,
                    _abspath: res
                };
            }
            else {
                const text_content = await readFile(res, { encoding: 'utf-8' });
                yield {
                    hrefs,
                    mime_type: _mime_type,
                    _filename: <string>fname,
                    _basepath: dir,
                    _abspath: res,
                    text_content
                };
            }
            
        }
    }
}

export async function create_vfs(
    href: string,
    dir: string
): Promise<MountedVFS> {
    const mounted_files = [];
    for await (const f of get_files(href, dir)) mounted_files.push(f);
    return {
        mounted_href: href,
        mounted_path: dir,
        mounted_files
    };
}

export function __mime_type(
    path: string,
    as_obj?: boolean
) {
    const _type = mime_type.contentType(path).toString();
    if(as_obj) {
        return { 'Content-Type': _type };
    }
    return _type
}