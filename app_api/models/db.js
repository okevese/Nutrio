
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

import config from '../../config/index';

const dbURI = config.dbURI;
mongoose.connect(dbURI, { useNewUrlParser: true });
const db = mongoose.connection;


db.on('error', error => console.error(`Connection to Nutrio database failed: ${error}`));
db.on('connected', () => console.log('Connected to Nutrio database'));
db.on('disconnected', () => console.log('Disconnected from Nutrio database'));

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Nutrio terminated, connection closed');
    process.exit(0);
  });
});

