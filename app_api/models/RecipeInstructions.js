import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  instructions: [{
    number: Number,
    step: String,
    ingredients: [{
      id: Number,
      name: String,
      image: String
    }],
    equipments: [{
      id: Number,
      name: String,
      image: String
    }]
  }],
  createdAt: { type: Date, default: Date.now, expires: '1d' },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;