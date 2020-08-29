'use strict';

module.exports = {
  name: 'greeter',

  /**
   * Actions
   */
  actions: {
    /**
     * Say a 'Hello'
     *
     * @returns
     */
    hello: {
      rest: 'GET /',
      handler() {
        return 'Hello Parcels!';
      },
    },
    /**
     * get an item
     *
     * @param {String} id - Item identifier
     */
    welcome: {
      rest: 'GET /:you',
      params: {
        you: 'string',
      },
      handler(ctx) {
        return `Welcome ${ctx.params.you}!`;
      },
    },
  },
};
