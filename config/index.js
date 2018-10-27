// Config loader.
require('dotenv').config();
import fs from 'fs';
import path from 'path';
const NODE_ENV = process.env.NODE_ENV;
let configBuffer = null;

// Init congig buffer according to the NODE_ENV
// The default environment is 'development'
switch(NODE_ENV) {
  case 'production':
    configBuffer = fs.readFileSync(path.resolve(__dirname,
      'prod.json'), 'utf-8');
    break;
  case 'staging':
    configBuffer = fs.readFileSync(path.resolve(__dirname,
      'staging.json'), 'utf-8');
    break;
  default:
      configBuffer = fs.readFileSync(path.resolve(__dirname,
        'dev.json'), 'utf-8');
}

let config = JSON.parse(configBuffer);
config.food_api_secret = process.env.API_KEY;

export default config;