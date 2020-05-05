/* eslint-disable no-console */
/*
 * Main server
 */
require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const compression = require('compression');
const path = require('path');

const sanitizer = require('sanitize');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');

/** Import Routes */
const { verifyAuthentication } = require('./utils/middleware');
const indexRouter = require('./controllers/index.js');

/** Instantiate the server */
const app = express();
const PORT = process.env.PORT || 3000;

/** Set up static public directory */
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

/** Middlewarez */
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(sanitizer.middleware);
app.use(expressSanitizer());

/** Set up routes */
// FIXME: Remove this index router, as it does nothing other than provide a healthcheck and test endpoint
app.use('/', indexRouter);

/** Protected Routes */
app.use(verifyAuthentication);

/** Any remaining request with an extension (.js, .css, etc...) send 404
 *
 */
app.use((req, _, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  }

  next();
});

app.listen(PORT, () => {
  console.log('Server Template listening on port', PORT);
});
