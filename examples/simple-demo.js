const { spawnWebServer } = require('../lib');

spawnWebServer({
    port: 3000, 
    throwWarnings: false 
}, (req, res) => {
    res.writeHead(200, 'success', [ ['Content-Type', 'text/html']]);
    res.write('<h1>Hello World</h1>');
    res.end();
}, () => console.log('server started, open browser to port 3000'));