DROP TABLE IF EXISTS articles;

CREATE TABLE articles
  (id BIGSERIAL PRIMARY KEY,
	title varchar(255) NOT NULL,
	content varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
 	original_date DATE,
  edit_date DATE
);
