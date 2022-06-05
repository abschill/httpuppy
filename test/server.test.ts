import expect from 'expect';
import { get } from 'http';
import {
	it,
	describe
} from 'mocha';
import {
	Log_Timeout,
	Test_String
} from './setup-tests';
import {
	useRouter,
	useServer
} from '../lib';

describe('basic coldinit setup', function() {
	const server0 = useServer({
		static: {
			path: './examples/files'
		},
		port: 3000
	});

	it('should not start until user does', function() {
		expect(server0).toHaveProperty('listen');
	});

	it('creates virtual filesystem on creation', function() {
		expect(server0).toHaveProperty('_vfs');
		expect(server0._vfs.mountedFiles.length).toBe(3);
	});

	it('creates router', function() {
		const router = useRouter(server0);
		expect(router).toHaveProperty('get');
		expect(router).toHaveProperty('post');
		expect(router).toHaveProperty('head');
		expect(router).toHaveProperty('put');
		expect(router).toHaveProperty('patch');
		expect(router).toHaveProperty('delete');
	});
	server0._shutdown();
});

describe('api doesnt conflict with static pages', function() {
	it('successfully perform HTTP GET against api', function(done) {
		const server1 = useServer({
			static: {
				path: './examples/files'
			}
		});
		const router = useRouter(server1);
		router.get('/api/v1', (req, res) => res.send(Test_String));
		server1.listen(3001);
		Promise.resolve(get('http://localhost:3000/api/v1', (res) => {
			res.on('data', (chunk) => {
				const str = chunk.toString();
				expect(str).toEqual(Test_String);
			});
		})).then(() => {
			done();
			setTimeout(()=> (server1._shutdown(), process.exit(0)), Log_Timeout);
		});
	});
});
