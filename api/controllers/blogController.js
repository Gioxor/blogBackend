'use strict';
var mongoose = require('mongoose'),
  Article = mongoose.model('Articles');

exports.list_all_articles = function(req, res) {
  Article.find({}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

  exports.create_an_article = function(req, res) {
    var new_article = new Article(req.body);
    new_article.save(function(err, article) {
      if (err)
        res.send(err);
      res.json(article);
    });
  };

