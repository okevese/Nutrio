import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: String,
  steps: [{
    number: Number,
    step: String,
    ingredients: [{
      id: Number,
      name: String,
      image: String
    }],
    equipment: [{
      id: Number,
      name: String,
      image: String
    }]
  }],
  createdAt: { type: Date, default: Date.now, expires: '1d' }
});  

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;