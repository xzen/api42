const show = require('./user/show.js');
const create = require('./user/create.js');
const destroy = require('./user/destroy.js');
const search = require('./user/search.js');

module.exports = {
  user: {
    show,
    create,
    destroy,
    search
  }
};
