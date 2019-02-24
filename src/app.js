import express from 'express';
import cors from 'cors';
import favicon from 'serve-favicon';
import logger from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import uglifyJs from 'uglify-js';
import fs from 'fs';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import passport from 'passport';

import './app_api/models/db';
import './app_api/models/User';
import './app_api/auth/passport';

// import routes from './app_server/routes/index';
import routesApi  from './app_api/routes/index';
import errorHandler from './app_api/middleware/errorHandlers/genericErrorHandler.js';
import unauthorized from './app_api/middleware/errorHandlers/unauthorized';

const app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

let appClientFiles = [
  'app.js',
  'home/home.controller.js',
  'meal_plan/meal.controller.js',
  'daily_calorie/calorie.controller.js',
  'replace_ingredient/ingredient.controller.js',
  'common/services/replaceIngredientData.service.js',
  'common/services/triviaData.service.js',
  'common/services/mealPlanData.service.js',
  'common/services/dailyCalorieData.service.js',
  'common/directives/footerGeneric/footerGeneric.directive.js',
  'common/directives/navigation/navigation.directive.js',
  'common/directives/pageHeader/pageHeader.directive.js'
];

let contents = appClientFiles.map(function(file) {
  return fs.readFileSync(path.join('src', 'app_client', file), 'utf8');
});

const uglified = uglifyJs.minify(contents);

fs.writeFile('src/public/angular/nutrio.min.js', uglified.code, function(err) {
  if (err) console.log(err);
  else console.log('Script generated and saved: nutrio.min.js');
});

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
app.use(express.static(path.join(__dirname, 'app_client')));

// app.use('/', routes);
app.use('/api/v1', routesApi);
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});
app.use(errorHandler);
app.use(unauthorized);


module.exports = app;
