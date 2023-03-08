const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // 1 route
    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //         return 'Hello World!';
    //     }
    // });

    // beberapa route
    // server.route([
    //     {
    //         method: 'GET',
    //         path: '/',
    //         handler: (request, h) => {
    //             return 'Homepage';
    //         },
    //     },
    //     {
    //         method: 'GET',
    //         path: '/about',
    //         handler: (request, h) => {
    //             return 'About Page';
    //         },
    //     },
    // ]);

    // 3. menggunakan modul
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();