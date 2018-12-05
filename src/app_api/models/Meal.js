import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  meals: [{
    id: Number,
    title: String,
    readyInMinutes: Number,
    servings: Number,
    image: String,
    imageUrls: [String]
  }],
  nutrients: {
    calories: Number,
    protein: Number,
    fat: Number,
    carbohydrates: Number
  },
  createdAt: { type: Date, default: Date.now, expires: '1d' },
});

const Meal = mongoose.model("Meal", mealSchema);
export default Meal;