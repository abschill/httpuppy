import expect from 'expect';
import { useRouter, useServer } from '../lib';
import { get } from 'http';

import { it, describe } from 'mocha';
describe('Retrieve Server with coldInit default', function() {
	it('should not start until user does', function() {
		const server = useServer({
			coldInit: true,
			static: {
				path: './examples/files'
			},
			port: 3000
		});
		expect(server).toHaveProperty('listen');
	});
});

describe('Setup Custom API Endpoints with static config', function() {
	it('successfully perform HTTP GET against api', function() {
		const server = useServer({
			static: {
				path: './examples/files'
			}
		});
		const router = useRouter(server);
		router.get('/api/v1', (req, res) => res.end('hello world'));
		server.listen(3000);
		Promise.resolve(get('http://localhost:3000/api/v1', (res) => {
			res.on('data', (chunk) => {
				expect(chunk.toString()).toEqual('hello world');
			});
			res.on('end', () => server._shutdown());
		})).then(() => process.exit(0));
	});
});
