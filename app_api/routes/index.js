import express from 'express';
const router = express.Router();

import { register } from '../middleware/authentication';
import getFoodJoke from '../data/foodJoke';
import foodJoke from '../middleware/foodJoke';
import getFoodTrivia from '../data/foodTrivia';
import foodTrivia from '../middleware/foodTrivia';
import getMealPlan from '../data/mealPlan';
import mealPlan from '../middleware/mealPlan';
import getQuickAnswer from '../data/quickAnswer';
import quickAnswer from '../middleware/quickAnswer';
import getRecipeDailyCalorie from '../data/recipeDailyCalorie';
import recipeDailyCalorie from '../middleware/recipeDailyCalorie';
import getReplaceIngredient from '../data/replaceIngredient';
import replaceIngredient from '../middleware/replaceIngredient';
import getVisualRecipeNutrition from '../data/visualRecipeNutrition';
import visualRecipeNutrition from '../middleware/visualRecipeNutrition';
import getRecipeInstructions from '../data/recipeInstructions';
import recipeInstructions from '../middleware/recipeInstructions';
import unknownRoute from '../middleware/errorHandlers/undefinedRoute';


router.get('/joke', getFoodJoke, foodJoke);
router.get('/trivia', getFoodTrivia, foodTrivia);
router.get('/meal_plan', getMealPlan, mealPlan);
router.get('/answer', getQuickAnswer(), quickAnswer);
router.get('/daily_calorie_recipe', getRecipeDailyCalorie, recipeDailyCalorie);
router.get('/recipe_instructions', getRecipeInstructions, recipeInstructions);
router.get('/replace_ingredient', getReplaceIngredient, replaceIngredient);
router.get('*', unknownRoute);

router.post('/register', register);
// router.post('/login', login);
router.post('/visual_nutrients', getVisualRecipeNutrition(), visualRecipeNutrition);

export default router
