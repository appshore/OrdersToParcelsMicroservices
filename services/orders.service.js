'use strict';

const orders = require('../data/orders.json').orders;

module.exports = {
  name: 'orders',
  settings: {
    fields: ['id', 'date', 'items'],
  },

  // afterConnected() {
  //   this.actions
  //     .insert({ entities: orders })
  //     .then(res => console.log(`${res.length} orders inserted in memory`))
  //     .catch(err => console.error('orders insert errot', err))
  // },

  actions: {
    /**
     * get an order
     *
     * @param {String} id - Order identifier
     */
    get: {
      rest: 'GET /:id',
      params: {
        id: 'string',
      },
      handler(ctx) {
        return orders.find((o) => o.id === ctx.params.id);
      },
    },

    /**
     * get all orders
     */
    getAll: {
      rest: 'GET /',
      handler() {
        return orders;
      },
    },
  },
};
