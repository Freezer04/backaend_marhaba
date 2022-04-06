const Repas = require("../models/Repas");

//Create Repas
const createRepas = async(req,res) => {
  const createrepas = await Repas.create({
    title: req.body.title,
    descreption: req.body.descreption,
    price:req.body.price,
    image:req.body.image,
    type:req.body.type
  });
  try {
    res.json(createrepas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//Get All Repas
const getRepas = async (req,res) => {
  const annonce = await  Repas.find()
  try{
    res.json(annonce);
  } catch (error){
    res.status(400).json({error:error.message});
}
}
const orderRepas = (req,res) => {}

const searchForRepas = (req,res) => {}

const getRecommendedRepas = (req,res) => {}

const getCount = (req,res) => {}

//Update Repas
// const updateRepas = async (req,res) => {
//   const idRepas = req.params.idrepas;
//   console.log(idRepas);
//   try{
//    Repas.findByIdAndUpdate(idRepas, req.body.data, (err, result) => {
//     if (err) {
//       res.status(400).json(err);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// } catch (error) {
//   res.status(400).json({ error: error.message });
// }
// }

const updateRepas = async (req, res) => {
  let data = req.body;
  const roomUpdate = await Repas.findByIdAndUpdate({ _id: req.params.id }, data)
  res.json({roomUpdate});
  console.log(roomUpdate);
}


//Delete Repas
const deleteRepas = async (req,res) => {
  try {
    const deleterepas = await Repas.findByIdAndDelete(req.params.idrepas);
  
    if (!deleterepas) {
      res.status(404).json({ message: "No Repas Found" });
    } else {
      res.status(200).json({ message: "Repas Has deleted successfully !!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
    createRepas,
    getRepas,
    orderRepas,
    searchForRepas,
    getRecommendedRepas,
    getCount,
    updateRepas,
    deleteRepas
}
