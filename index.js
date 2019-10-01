const express = require ('express');
const mongoose = require ('mongoose');
const port = process.env.PORT||3000;
mongoose.connect('mongodb://localhost/trivia')
const QuestionSchema = new mongoose.Schema({
  quiestion:{
    type:String,
    required;true,
  }
});
const Question = mongoose.model('Question',QuestionSchema);
const app = express();
app.get('/', (req,res) =>{
res.send('hola');
});
app.listen(port);
