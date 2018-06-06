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

    this.run();
  }

  /**
   * Routes
   */
  routes () {
    new routes.user.show(this.app);
    new routes.user.destroy(this.app);
    new routes.user.create(this.app);

    // If route not exist
    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not Found'
      });
    });
  }

  /**
   * Run
   */
  run () {
    try {
      this.routes();
      this.app.listen(4000, () => {
        console.log('server run !!!');
      });
    } catch (e) {
      console.error(`[ERROR] Server -> ${e}`);
    }
  }
};
