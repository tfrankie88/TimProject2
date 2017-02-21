const Wiki  = require('../../models/wiki');
const timestamp = require('time-stamp');
const marked = require('marked');

let controller = {};

controller.index  = (req,res) => {
  Wiki
  .findAll()
  .then((data => {
    // console.log(data, data[0].original_date)
    res.render('wikis/index.ejs', {
      articles: data
    })
  .catch(err => console.log('ERROR', err));
  }));
};

controller.new = (req,res) => {
  res.render('wikis/new');
}

controller.create = (req,res) => {
  let first_date = timestamp();
  let original_date = first_date.split(':').join('-');
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
    console.log(data);
    res.render('wikis/show', {
      articles: data
    })
  })
  .catch(err => console.log('error', err));
};

controller.update = (req,res) => {
  console.log(req.body);
  Wiki
  .update(req.body.articles, req.params.id)
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
