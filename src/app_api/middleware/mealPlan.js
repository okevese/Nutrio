
import mongoose from 'mongoose';
import Meal from '../models/Meal';

const mealPlan = (req, res, next) => {
  const dayMealPlan = new Meal({
    meals: res.locals.mealPlan.meals,
    nutrients: res.locals.mealPlan.nutrients
  });

  dayMealPlan
    .save()
    .then(mealPlan => {
      res.status(200).json({ message: "saved success", mealPlan });
    })
    .catch((e) => {
      next(e);
    });
}

export default mealPlan;