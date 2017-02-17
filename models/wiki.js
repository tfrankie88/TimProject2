const db = require('../config/schema');
const Wiki = {};

Wiki.findAll = () => {
  return db.manyOrNone(`SELECT * FROM articles`);
};

Wiki.save = (wiki) => {
  return db.none(`
    INSERT INTO articles
    (title, category, content)
    VALUES
    ($1, $2, $3)`,
    [wiki.title, wiki.category, wiki.content]
  );
};

Wiki.findById = (id) => {
  return db.one(`
    SELECT * FROM
    articles
    WHERE id = $1`,
    [id]
  );
};

Wiki.update = (wiki, id) => {
  return db.none(`
    UPDATE articles
    SET
      title = $1,
      category = $2,
      content = $3
    WHERE id = $4`,
    [wiki.title, wiki.category, wiki.content, id]
  );
};

module.exports = Wiki;
