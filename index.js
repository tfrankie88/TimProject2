const express         = require('express');
const app             = express();
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const path            = require('path');

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(
  path.join(__dirname, 'public')
));

app.use(require('./resources'));
