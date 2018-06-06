// Core
const mock = require('../../models/get-user.js');

module.exports = class Show {
  constructor(app) {
    this.app = app;

    this.run();
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.get('/user/show/:id', (req, res) => {
      if (! req.params || ! req.params.id.length) {
        res.status(404).json({
          code: 404,
          message: 'Not Found'
        });
      }

      res.status(200).json(mock[req.params.id] || {});
    });
  }

  /**
   * Run
   */
  run () {
    try {
      this.middleware();
    } catch (e) {
      console.error(`[ERROR] Server -> ${e}`);
    }
  }
};
