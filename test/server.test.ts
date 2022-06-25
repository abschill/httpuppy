import expect from 'expect';
import { get } from 'http';
import { type } from 'os';
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

const os = type();
const mountPath = 'examples/files';

describe('basic setup', function() {
	const server0 = useServer({
		static: {
			path: mountPath
		},
		port: 3000
	});
	const router = useRouter(server0);
	it('should properly give the vfs the given path', () => {
		if(os !== 'Windows_NT') expect(server0._vfs.mountedPath).toMatch(mountPath);
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
		expect(router).toHaveProperty('get');
		expect(router).toHaveProperty('post');
		expect(router).toHaveProperty('head');
		expect(router).toHaveProperty('put');
		expect(router).toHaveProperty('patch');
		expect(router).toHaveProperty('delete');
		expect(router).toHaveProperty('trace');
		expect(router).toHaveProperty('options');
		expect(router).toHaveProperty('use');
	});

	it('creates callables for router', function() {
		expect(router.url).toBe('');
	});

	server0.stop();
});

describe('handle static/router base path', () => {
	const server1 = useServer({
		static: {
			path: mountPath
		},
		log: {
			log_level: 'verbose'
		},
		port: 3000
	});
	const router = useRouter(server1, { baseUrl: '/api/v1' });
	it('should properly give the vfs the given path', () => {
		if(os !== 'Windows_NT') expect(server1._vfs.mountedPath).toMatch(mountPath);
	});

	it('should load 3 files into the virtual filesystem', () => {
		expect(server1._vfs.mountedFiles.length).toBe(3);
	});

	it('should not start until user does', function() {
		expect(server1).toHaveProperty('listen');
	});

	it('creates virtual filesystem on creation', function() {
		expect(server1).toHaveProperty('_vfs');
		expect(server1._vfs.mountedFiles.length).toBe(3);
	});

	it('creates router', function() {
		expect(router).toHaveProperty('get');
		expect(router).toHaveProperty('post');
		expect(router).toHaveProperty('head');
		expect(router).toHaveProperty('put');
		expect(router).toHaveProperty('patch');
		expect(router).toHaveProperty('delete');
		expect(router).toHaveProperty('trace');
		expect(router).toHaveProperty('options');
		expect(router).toHaveProperty('use');
	});

	it('creates callables for router', function() {
		expect(router.url).toBe('/api/v1');
	});

	server1.stop();
});

describe('api doesn\'t conflict with static pages', function() {
	it('successfully perform HTTP GET against api', function(done) {
		const server1 = useServer({
			static: {
				path: './examples/files'
			},
			port: 3001
		});
		const router = useRouter(server1, { baseUrl: '/api/v1'});
		router.get('/', (req, res) => res.send(Test_String));
		router.get('/get1', (req, res) => res.json( { foo: 'bar' } ) );
		router.post('/poster', (req, res) => res.json(req.body));
		server1.start();
		Promise.resolve(get('http://localhost:3001/api/v1', (res) => {
			res.on('data', (chunk) => {
				const str = chunk.toString();
				expect(str).toEqual(Test_String);
			});
		})).then(null).catch(console.error);

		Promise.resolve(get('http://localhost:3001/api/v1/get1', (res) => {
			res.on('data', (chunk) => {
				const json = JSON.parse(chunk);
				expect(json).toEqual({ foo: 'bar' });
			});
		})).then(_ => {
			done();
			setTimeout(()=> (server1.stop(), process.exit(0)), Log_Timeout);
		});
	});
});
