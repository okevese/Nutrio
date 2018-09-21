import express from 'express';
const router = express.Router();
import { 
  foodJoke,
  foodTrivia,
  mealPlan,
  recipeDailyCalorie,
  about 
} from '../controllers/main';

router.get('/', foodTrivia);
router.get('/joke', foodJoke);
router.get('/meals', mealPlan);
router.get('/daily_calorie', recipeDailyCalorie);
router.get('/joke', foodJoke);
router.get('/trivia', foodTrivia);
router.get('/about', about);









export default router;