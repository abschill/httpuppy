const {
    create_vfs
} = require('./lib');

create_vfs('/', '__fixtures__').then(console.log);
create_vfs('/lib', 'lib').then(console.log);