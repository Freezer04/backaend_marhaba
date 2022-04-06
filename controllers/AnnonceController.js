const Annonce = require("../models/Annonces")


//Create Annonce
const createAnnouncement = async (req,res) => {
  const createannoce = await Annonce.create({
    title: req.body.title,
    descreption: req.body.descreption,
    price:req.body.price
  });
  try {
    res.json(createannoce);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


//Get All Annonce
const getAnnouncements = async (req,res) => {
  const annonce = await  Annonce.find()

  try{
    res.json(annonce);
  } catch (error){
    res.status(400).json({error:error.message});
  }
}


// Update Annonce
const updateAnnouncement = async (req,res) => {
  const idAnnonce = req.params.idAnnonce;
  try{
  Annonce.findByIdAndUpdate(idAnnonce, req.body.data, (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
} catch (error) {
  res.status(400).json({ error: error.message });
}

}

//Delete Annoonce
const deleteAnnouncement = async (req,res) => {
  try {
    const deleteannonce = await Annonce.findByIdAndDelete(req.params.idAnnonce);
  
    if (!deleteannonce) {
      res.status(404).json({ message: "No Annonce Found" });
    } else {
      res.status(200).json({ message: "Annonce Has deleted successfully !!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
    createAnnouncement,
    getAnnouncements,
    updateAnnouncement,
    deleteAnnouncement
}