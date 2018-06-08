// Dependencies
const mongoose = require('mongoose')
const Schema = require('../../models/user.js')
const validator = require('node-validator')
const check = require('./payload-validator/create.js')

module.exports = class Create {
  constructor (app, config) {
    this.app = app
    this.config = config
    this.check = check

    this.run()
  }

  /**
   * Get model with mongoose schema
   */
  getModel (res, payload) {
    mongoose.connect(this.config.mongodb)

    this.db = mongoose.connection
    this.db.on('error', () => {
      res.status(500).json({
        'code': 500,
        'message': 'Internal Server Error'
      })

      console.error(`[ERROR] user/create getModel() -> connection mongodb failed`)
    })

    const User = mongoose.model('User', Schema)
    const model = new User(payload)

    return model
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.post('/user/create', validator.express(this.check), (req, res) => {
      try {
        this.getModel(res, req.body).save((err, result) => {
          if (err) {
            res.status(500).json({
              'code': 500,
              'message': 'Internal Server Error'
            })

            console.error(`[ERROR] user/create middleware() -> ${err}`)
          }

          res.status(200).json(result)
        })
      } catch (e) {
        console.error(`[ERROR] user/create -> ${e}`)
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}
