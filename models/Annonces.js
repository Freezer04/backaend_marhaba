const mongoose = require("mongoose");

// create Annonce Schema

const AnnonceSchema = new mongoose.Schema({
  
  title : {
    type: String,
    required: true,
    min: 3,
    max:30
},
  descreption: {
    type: String,
    required: true
  },
  date:{
    type:Date,
    default:Date.now
  },

  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  id_repas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Repas",
  }
});

// creating the model booking
module.exports = mongoose.model('Annonce', AnnonceSchema);