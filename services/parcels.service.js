'use strict';

const { processOrder } = require('../src/orders');

module.exports = {
  name: 'parcels',
  actions: {
    /**
     * Set parcels for an order
     *
     * @param {String} id - Order identifier
     */
    order: {
      rest: 'GET /order/:id',
      params: {
        id: 'string',
      },
      async handler(ctx) {
        try {
          return await processOrder(
            await ctx.call('orders.get', { id: ctx.params.id }),
            await ctx.call('items.getAll')
          );
        } catch (err) {
          console.error('Parcels get order', err);
        }
      },
    },
  },
};
