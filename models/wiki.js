const db   = require('../config/schema');
const Wiki = {};

Wiki.findAll = () => {
  return db.manyOrNone(`SELECT * FROM articles`);
};

Wiki.save = (wiki, convertedMark, original_date) => {
  return db.none(`
    INSERT INTO articles
    (title, category, content, original_date)
    VALUES
    ($1, $2, $3, $4)`,
    [wiki.title, wiki.category, convertedMark, original_date]
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

Wiki.findCategory = (category) => {
  return db.manyOrNone(`
    SELECT * FROM
    articles
    WHERE category = $1`,
    [category]
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
