
import mongoose from 'mongoose';
import Meal from '../models/Meal';

const recipeDailyCalorie = (req, res, next) => {
  console.log(req.body);
  const dailyCalorie = new Meal({
    id: req.body.id,
    title: req.body.title,
    readyInMinutes: req.body.readyInMinutes,
    servings: req.body.servings,
    image: req.body.image
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