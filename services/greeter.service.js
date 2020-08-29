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
      handler(ctx) {
        // ctx.meta.$responseType = 'text/html';
        ctx.meta.$responseHeaders = {
          'Content-Type': 'text/html; charset=UTF-8',
        };
        return `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <title>Orders and Parcels Micro Services</title>
                </head>
                <body>
                    <h1>Welcome to Orders and Parcels!</h1>
                </body>
            </html>
        `;
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
        ctx.meta.$responseType = 'text/html';
        // ctx.meta.$responseHeaders = {
        //   'Content-Type': 'text/html; charset=UTF-8',
        // };
        return `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <title>Orders and Parcels Micro Services</title>
                </head>
                <body>
                    <h1>Welcome ${ctx.params.you}!</h1>
                </body>
            </html>
        `;
      },
    },
  },
};
