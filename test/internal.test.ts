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
	checkNumConfigs,
	mimeType,
	useConfigFrom
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

describe('misc internal testing', () => {
	it('finds the right number of configs in figures', () => {
		expect(checkNumConfigs(fixtures)).toBe(2);
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

describe('config tests', () => {
	it('loads config without prompt from local dir with only one option', () => {
		const expected = require('../httpuppy.json');
		expect(useConfigFrom(process.cwd())).toEqual(expected);
	});
});
