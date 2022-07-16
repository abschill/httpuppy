import expect from 'expect';
import { it, describe } from 'mocha';
import { create_vfs, __mime_type } from '../lib'
import { resolve } from 'path';

describe('base tests', () => {
    it('Gets Proper MIME Type for HTML', () => {
        const mime_html = __mime_type(resolve(process.cwd(), '__fixtures/index.html'));
        return expect(mime_html).toMatch(/html/g);
    });
    it('Gets 2 vfs files in a dir of 2 files with a subdir', async () => {
        const vfs_test = await create_vfs('/', resolve(process.cwd(), '__fixtures__'));
        expect(vfs_test).toHaveProperty('mounted_files');
        expect(vfs_test.mounted_files).toHaveLength(2);
    });
});