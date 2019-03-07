
import mongoose from 'mongoose';
import Meal from '../models/Meal';

const recipeDailyCalorie = (req, res, next) => {
  const dailyCalorie = new Meal({
    meals: res.locals.dailyCalorie.meals,
    nutrients: res.locals.dailyCalorie.nutrients
  });

  dailyCalorie
    .save()
    .then(recipeDailyCalorie => {
      res.status(200).json({ message: "saved success", recipeDailyCalorie });
    })
    .catch((e) => {
      next(e);
    });
}

export default recipeDailyCalorie;