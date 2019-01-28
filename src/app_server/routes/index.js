import express from 'express';
const router = express.Router();
import { 
  foodJoke,
  renderHome,
  mealPlan,
  recipeDailyCalorie,
  replaceIngredient,
  about, 
  recipeInstructions,
  angularApp
} from '../controllers/main';

router.get('/', angularApp);
router.get('/joke', foodJoke);
router.get('/meals', mealPlan);
router.get('/daily_calorie', recipeDailyCalorie);
router.get('/instructions', recipeInstructions);
router.get('/replace', replaceIngredient);
router.get('/joke', foodJoke);
router.get('/about', about);









export default router;