const db   = require('../config/schema');
const Wiki = {};

Wiki.findAll = () => {
  return db.manyOrNone(`SELECT * FROM articles`);
};

Wiki.save = (wiki, original_date) => {
  return db.none(`
    INSERT INTO articles
    (title, category, content, original_date)
    VALUES
    ($1, $2, $3, $4)`,
    [wiki.title, wiki.category, wiki.content, original_date]
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

Wiki.destroy = (id) => {
  return db.query('DELETE FROM articles WHERE id = $1', [id]);
}

module.exports = Wiki;
