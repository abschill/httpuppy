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

describe('api doesnt conflict with static pages', function() {
	it('successfully perform HTTP GET against api', function(done) {
		const server = useServer({
			static: {
				path: './examples/files'
			}
		});
		const router = useRouter(server);
		router.get('/api/v1', (req, res) => res.end(Test_String));
		server.listen(3000);
		Promise.resolve(get('http://localhost:3000/api/v1', (res) => {
			res.on('data', (chunk) => {
				const str = chunk.toString();
				expect(str).toEqual(Test_String);
			});
		})).then(() => {
			done();
			setTimeout(()=> process.exit(0), Log_Timeout);
		});
	});
});
