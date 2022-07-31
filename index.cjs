const { useServer, useRouter } = require('httpuppy');

const server = useServer({
    port: 3001,
    log_level: 'verbose'
});
const router = useRouter(server);
router.get('/', (req, res) => res.json({ msg: 'hello' }));

router.get('/route0', (req, res) => res.json({ msg: 'route 0' }));

router.get('/route1', (req, res) => res.json({ msg: 'route 1' }));


  
server.start();
