// Config loader.
require('dotenv').config({ path: './src/.env' });
import fs from 'fs';
import path from 'path';
process.env.NODE_ENV = 'production'; 
const NODE_ENV = process.env.NODE_ENV;
let configBuffer = null;

// Init config buffer according to the NODE_ENV
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
config.dbURI = process.env.MONGODB_URI;


export default config;