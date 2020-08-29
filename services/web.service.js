'use strict';

const ApiGateway = require('moleculer-web');

module.exports = {
  name: 'web',
  mixins: [ApiGateway],

  // More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
  settings: {
    port: process.env.PORT || 3000,

    routes: [
      {
        path: '/api',
        whitelist: [
          '**',
        ],
        aliases: {
          'GET items/:id': 'items.get',
          'GET items': 'items.getAll',
          'GET orders/:id': 'orders.get',
          'GET orders': 'orders.getAll',
          'GET parcels/order/:id': 'parcels.order',
        },
      },
      {
        path: '/',
        whitelist: [
          '**',
        ],
        aliases: {
            'GET greeter/:you': 'greeter.welcome',
            'GET greeter': 'greeter.hello',
          },
      },
    ],

    // Serve assets from "public" folder
    assets: {
      folder: 'public',
    },
  },
};
