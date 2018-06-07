const create = require('./user/create.js');
const show = require('./user/show.js');
const search = require('./user/search.js');
const update = require('./user/update.js');
const destroy = require('./user/destroy.js');

module.exports = {
  user: {
    create,
    show,
    search,
    update,
    destroy
  }
};
