
import mongoose from 'mongoose';
import Meal from '../models/Meal';

const saveMeal = (req, res, next) => {
  const meal = new Meal({
    id: req.body.id,
    title: req.body.title,
    readyInMinutes: req.body.readyInMinutes,
    servings: req.body.servings,
    image: req.body.image
  });

  meal
    .save()
    .then(savedMeal => {
      res.status(200).json({ message: "saved success", savedMeal });
    })
    .catch(e => {
      next(e);
    });
}


const getSavedMeals = (req, res, next) => {
  Meal.find({}).then(meals => {
    res.status(200).json({ message: "success", meals });
  })
  .catch(e => {
    next(e);
  });
}

export { saveMeal, getSavedMeals };