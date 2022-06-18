import expect from 'expect';
import { get, request } from 'http';
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

const mountPath = 'examples/files';

describe('basic coldinit setup', function() {
	const server0 = useServer({
		static: {
			path: mountPath
		},
		port: 3000
	});

	it('should properly give the vfs the given path', () => {
		expect(server0._vfs.mountedPath).toMatch(mountPath);
	});

	it('should load 3 files into the virtual filesystem', () => {
		expect(server0._vfs.mountedFiles.length).toBe(3);
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
	server0.stop();
});

describe(`api doesn't conflict with static pages`, function() {
	it('successfully perform HTTP GET against api', function(done) {
		const server1 = useServer({
			static: {
				path: './examples/files'
			},
			port: 3001
		});
		const router = useRouter(server1);
		router.get('/api/v1', (req, res) => res.send(Test_String));
		router.get('/api/v2/get1', (req, res) => res.json( { foo: 'bar' } ) );
		router.post('/api/v3/poster', (req, res) => res.json(req.body));
		server1.start();
		Promise.resolve(get('http://localhost:3001/api/v1', (res) => {
			res.on('data', (chunk) => {
				const str = chunk.toString();
				expect(str).toEqual(Test_String);
			});
		})).then(null).catch(console.error);

		Promise.resolve(get('http://localhost:3001/api/v2/get1', (res) => {
			res.on('data', (chunk) => {
				const json = JSON.parse(chunk);
				expect(json).toBeDefined();
			});
		})).then((foo) => {
			done();
			setTimeout(()=> (server1.stop(), process.exit(0)), Log_Timeout);
		});
	});
});
