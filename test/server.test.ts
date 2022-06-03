import expect from 'expect';
import { useServer} from '../src';

describe('Retrieve Server with coldInit', () => {
	it('should not start until user does', () => {
		const server = useServer({
			static: {
				path: './examples/files'
			},
			port: 3000
		});
		expect(server).toHaveProperty('listen');
	});
});
