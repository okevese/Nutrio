import express from 'express';
const router = express.Router();
import { 
  foodJoke,
  about, 
  angularApp
} from '../controllers/main';

router.get('/', angularApp);
router.get('/joke', foodJoke);
router.get('/about', about);


export default router;