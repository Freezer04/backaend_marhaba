const express = require("express");
const router = express.Router();
const verify = require ('../verifyToken/verifyToken')

const Annonce = require("../controllers/AnnonceController")

router
    .route("/")
    .get(verify,Annonce.getAnnouncements)
    .post(verify,Annonce.createAnnouncement);

    router 
    .route("/:idAnnonce")
    .put(verify,Annonce.updateAnnouncement)
    .delete(verify,Annonce.deleteAnnouncement)


module.exports = router;