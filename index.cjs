const { useServer } = require('httpuppy');
const { useRouter } = require('httpuppy-router');
const server = useServer({
    port: 3001,
    log_level: 'verbose',
    clustered: true
});

const router = useRouter(server);

server.static('/static', './static-server-test');

router.get('/', (req, res) => res.json({ msg: 'hello' }));

router.get('/:route', (req, res) => res.json({ msg: req.params.route }));

server.start();
