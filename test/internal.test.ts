import expect from 'expect';
import {
	it,
	describe
} from 'mocha';
import { statSync } from 'fs';
import { join, resolve } from 'path';
import {
	isValidStats,
	useEntityTag,
	mimeType,
	useConfig,
	defaultHTTPConfig,
	fromDefaultHTTPConfig
} from '../lib/internal';

const fixtures = join(process.cwd(), '__fixtures__');

describe('test etag generation process', () => {

	it('generates etag for a given content', () => {
		const tag = useEntityTag('foobar');
		expect(tag).toMatch(/\//);
		expect(tag).toBeTruthy();
	});

	it('determines a proper fs.Stat', () => {
		const ex = statSync(resolve(process.cwd(), 'package.json'));
		expect(isValidStats(ex)).toBeTruthy();
	});
});

describe('localized mime types', () => {

	it('detects the html file in fixtures', () => {
		expect(mimeType(resolve(fixtures, 'index.html'))).toEqual({'Content-Type': 'text/html'});
	});

	it('detects css as css', () => {
		expect(mimeType(resolve(process.cwd(), 'examples', 'style.css'))).toEqual({'Content-Type': 'text/css'});
	});
});

describe('config loading', () => {
	const h_test = { hostname: 'https://test.com' };
	const c_0 = useConfig();
	const c_1 = useConfig({}, []);
	const c_2 = useConfig(h_test);

	it('loads dynamic config opts', () => {
		expect(c_0).toEqual(defaultHTTPConfig);
		expect(c_1).toEqual(defaultHTTPConfig);
		expect(c_2).toEqual(fromDefaultHTTPConfig(h_test));
	});
});
