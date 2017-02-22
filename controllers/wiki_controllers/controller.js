const Wiki  = require('../../models/wiki');
const timestamp = require('time-stamp');
const marked = require('marked');

let controller = {};

controller.index  = (req,res) => {
  Wiki
  .findAll()
  .then((data => {
    // Thanks DAN! This function is for adding new articles to the list
    // without printing duplicates
    let categories = [];
    data.forEach((article) => {
      if (!categories.includes(article.category)) {
        categories.push(article.category)
      }
    })
    res.render('wikis/index.ejs', {
      articles: data,
      print: categories
    })
  .catch(err => console.log('ERROR', err));
  }));
};

controller.new = (req,res) => {
  res.render('wikis/new');
}

controller.create = (req,res) => {
  // Dan said the words "string concatenation" and let me run
  let first_date = timestamp();
  let original_date = first_date.split(':').join('-');
  // Tom and I divided and conquered thanks Tom for explaining marked to me
  let convertedMark = marked(req.body.wiki.content);
  Wiki
  .save(req.body.wiki, convertedMark, original_date)
  .then(() => res.redirect('/wiki'))
  .catch(err => console.log('ERROR', err));
}

controller.show = (req,res) => {
  Wiki
  .findCategory(req.params.category)
  .then((data) => {
    let categories = [];
    data.forEach((article) => {
      if (!categories.includes(article.category)) {
        categories.push(article.category)
      }
    })
    res.render('wikis/show', {
      articles: data
    })
  })
  .catch(err => console.log('error', err));
};

controller.update = (req,res) => {
  console.log(req.body);
  let first_date = timestamp();
  let update_date = first_date.split(':').join('-');
  Wiki
  .update(req.body.articles, req.params.id, update_date)
  .then(() => res.redirect('/wiki'))
  .catch(err => console.log('ERROR', err));
  // res.send(req.body);
  // console.log(req.params);
}

controller.edit = (req,res) => {
  Wiki
  .findById(req.params.id)
  .then((data => {
    res.render('wikis/edit.ejs', {
      articles: data
    })
  .catch(err => console.log('ERROR', err));
  }));
};

controller.destroy = (req,res) => {
  Wiki
  .destroy(req.params.id)
  .then(() => res.redirect('/wiki'))
  .catch(err => console.log('ERROR', err));
}

module.exports = controller;
