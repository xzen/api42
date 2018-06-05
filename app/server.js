// Dependencie
const express = require('express')

// Core
const routes = require('./controllers/routes.js')

/**
 * Server
 */
module.exports = class Server {
  constructor () {
    this.app = express()
  }

  /**
   * Run
   */
  run () {
    routes.user.show.run(this.app)
    routes.user.destroy.run()
    routes.user.create.run()

    // const userShow = new user.Show();
    // const userDestroy = new user.Destroy();
    // const userCreate = new user.Create();

    // userShow.run();
    // userDestroy.run();
    // userCreate.run();
  }
}
