import express from 'express';
const router = express.Router();
import { 
  foodJoke,
  about, 
  recipeInstructions,
  angularApp
} from '../controllers/main';

router.get('/', angularApp);
router.get('/joke', foodJoke);
router.get('/instructions', recipeInstructions);
router.get('/about', about);


export default router;