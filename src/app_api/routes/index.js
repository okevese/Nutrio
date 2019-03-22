import express from 'express';
const router = express.Router();

import getFoodJoke from '../data/foodJoke';
import getFoodTrivia from '../data/foodTrivia';
import getMealPlan from '../data/mealPlan';
import getQuickAnswer from '../data/quickAnswer';
import getRecipeDailyCalorie from '../data/recipeDailyCalorie';
import getReplaceIngredient from '../data/replaceIngredient';
import getVisualRecipeNutrition from '../data/visualRecipeNutrition';
import getRecipeInstructions from '../data/recipeInstructions';
import unknownRoute from '../middleware/errorHandlers/undefinedRoute';


router.get('/joke', getFoodJoke);
router.get('/trivia', getFoodTrivia);
router.get('/meal_plan', getMealPlan);
router.get('/answer', getQuickAnswer);
router.get('/daily_calorie_recipe', getRecipeDailyCalorie);
router.get('/recipe_instructions/:mealid', getRecipeInstructions);
router.get('/replace_ingredient', getReplaceIngredient);

router.get('*', unknownRoute);

export default router
