module.exports = {
  name: 'greeter',

  /**
   * Service settings
   */
  settings: {},

  /**
   * Service dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {
    /**
     * Say a 'Hello'
     *
     * @returns
     */
    hello() {
      return 'Hello Parcels!';
    },
    /**
     * get an item
     *
     * @param {String} id - Item identifier
     */
    to: {
      params: {
        you: 'string',
      },
      handler(ctx) {
        return `Hello ${ctx.params.you}!`;
      },
    },
  },
};
