import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  id: Number,
  title: String,
  readyInMinutes: Number,
  servings: Number,
  image: String,
  createdAt: { type: Date, default: Date.now, expires: '1d' },
});

const Meal = mongoose.model("Meal", mealSchema);
export default Meal;