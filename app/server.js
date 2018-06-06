// Dependencie
const express = require('express');

// Core
const routes = require('./controllers/routes.js');

/**
 * Server
 */
module.exports = class Server {
  constructor () {
    this.app = express();
  }

  /**
   * Run
   */
  run () {
    new routes.user.show(this.app);
    new routes.user.destroy(this.app);
    new routes.user.create(this.app);

    this.app.listen(4000, () => {
      console.log('server run !!!');
    });
  }
};
