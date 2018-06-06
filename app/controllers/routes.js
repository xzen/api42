const show = require('./user/show.js');
const create = require('./user/create.js');
const destroy = require('./user/destroy.js');

module.exports = {
  user: {
    show,
    create,
    destroy
  }
};
