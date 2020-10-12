'use strict';
module.exports = function(app) {
    var blog = require('../controllers/blogController');

  // blog Routes
  app.route('/articles')
    .get(blog.list_all_articles)
    .post(blog.create_an_article);

};