import expect from 'expect';
import { WebServer } from '../src';

describe('Retrieve Server with coldInit', () => {
	it('should not start until user does', () => {
		const server = WebServer.create({
			coldInit: true,
			static: {
				path: './examples/files'
			},
			port: 3000
		});
		expect(server).toHaveProperty('listen');
	});
});
