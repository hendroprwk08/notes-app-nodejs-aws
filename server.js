const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
              origin: ['*'],
            },
          },
    });

    // 1 route
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();