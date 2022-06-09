import expect from 'expect';
import {
	it,
	describe
} from 'mocha';
import { statSync } from 'fs';
import { resolve } from 'path';
import {
	isValidStats,
	useEntityTag,
	checkNumConfigs,
	useValidConfigOption
} from '../lib/internal';

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
		const p = resolve(process.cwd(), '__fixtures__');
		expect(checkNumConfigs(p)).toBe(2);
		expect(useValidConfigOption(p)).toBeTruthy();
	});
});
