// Core
const mock = require('../../models/get-user.js');
const validator = require('node-validator');

const check = validator.isObject()
.withRequired('name', validator.isString())
.withOptional('age', validator.isNumber())
.withOptional('gender', validator.isString({ regex: /^male|femal$/}));

module.exports = class Create {
  constructor(app) {
    this.app = app;

    this.run();
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.post('/user/create', validator.express(check), (req, res) => {
      try {
        Object.assign(mock, {
          [Object.keys(mock).length + 1]: req.body
        });

        res.status(200).json(mock || {});
      } catch (e) {
        console.error(`[ERROR] user/create -> ${e}`);
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        });
      }
     });
  }

  /**
   * Run
   */
  run () {
    this.middleware();
  }
};
