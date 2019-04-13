import express from 'express';
import { check } from 'express-validator/check';
const router = express.Router();
import jwt from 'express-jwt';

const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'  // Property on req to be payload
});

import { register, login } from '../middleware/authentication';
import getFoodJoke from '../data/foodJoke';
import getFoodTrivia from '../data/foodTrivia';
import getMealPlan from '../data/mealPlan';
import getQuickAnswer from '../data/quickAnswer';
import getRecipeDailyCalorie from '../data/recipeDailyCalorie';
import saveMeal from '../middleware/meal';
import getReplaceIngredient from '../data/replaceIngredient';
import getVisualRecipeNutrition from '../data/visualRecipeNutrition';
import getRecipeInstructions from '../data/recipeInstructions';
import recipeInstructions from '../middleware/recipeInstructions';
import unknownRoute from '../middleware/errorHandlers/undefinedRoute';


router.get('/joke', getFoodJoke);
router.get('/trivia', getFoodTrivia);
router.get('/meal_plan', getMealPlan);
router.get('/answer', getQuickAnswer);
router.get('/daily_calorie_recipe', getRecipeDailyCalorie);
router.get('/recipe_instructions/:mealid', getRecipeInstructions);
router.get('/replace_ingredient', getReplaceIngredient);

router.get('*', unknownRoute);

router.post('/register', [
  check('name').exists().withMessage('Name field is required'),
  check('email').exists().withMessage('Email field is required'), 
  check('password').exists().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('must be at least 6 chars long')], register);
    
router.post('/login', [check('email').exists(), check('password').exists()], login);
router.post('/visual_nutrients', getVisualRecipeNutrition());


// Database interaction routes
router.post('/daily_calorie_recipe/:mealid', saveMeal);

export default router
