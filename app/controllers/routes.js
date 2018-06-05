const show = require('./user/show.js')
const create = require('./user/create.js')
const destroy = require('./user/destroy.js')

module.exports = {
  user: {
    show: new show(),
    create: new create(),
    destroy: new destroy()
  }
}
