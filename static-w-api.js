const { useServer, useRouter } = require('httpuppy');

const server = useServer({
    port: 3001,
    log_level: 'verbose'
});
const router = useRouter(server);
router.get('/api', (req, res) => res.json({ msg: 'hello' }));

router.get('/api0', (req, res) => res.json({ msg: 'route 0' }));

router.get('/api1', (req, res) => res.json({ msg: 'route 1' }));

server.static('/', './static-server-test').then(_ => {
    server.start();
});
  

