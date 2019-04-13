
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
    .catch((e) => {
      next(e);
    });
}

export default saveMeal;