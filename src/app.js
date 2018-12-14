import express from 'express';
import cors from 'cors';
import favicon from 'serve-favicon';
import logger from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import passport from 'passport';

import './app_api/models/db';
import './app_api/models/User';
import './app_api/auth/passport';

import routes from './app_server/routes/index';
import routesApi  from './app_api/routes/index';
import errorHandler from './app_api/middleware/errorHandlers/genericErrorHandler.js';
import unauthorized from './app_api/middleware/errorHandlers/unauthorized';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// disable browser caching. 
app.use(helmet.noCache());

// disable MIME sniffing
app.use(helmet.noSniff())

// only allows iframes of same origin. Sets "X-Frame-Options: SAMEORIGIN".
app.use(helmet.frameguard({ action: 'sameorigin' }));

// TODO: Enforce HTTPS with express-enforces-ssl module.
// TODO: Include Helmet HTTP public key pinning

// Sets "Strict-Transport-Security: max-age=5184000" to keep users on HTTPS.
const sixtyDaysInSeconds = 5184000;
app.use(helmet.hsts({ maxAge: sixtyDaysInSeconds }));

// URL: http://localhost:3000/api-docs/ 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api/v1', routesApi);
app.use(errorHandler);
app.use(unauthorized);

/** 
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page with error.jade
  res.status(err.status || 500);
  res.render('error');
});
*/

module.exports = app;