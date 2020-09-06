// Mongoose modèle 

const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.exemple = require("./exemple.model.js")(mongoose);
db.education = require("./education.model.js")(mongoose);
db.espoir = require("./espoir.model.js")(mongoose);
db.event = require("./event.model.js")(mongoose);
db.jeunesse = require("./jeunesse.model.js")(mongoose);
db.projets = require("./projets.model.js")(mongoose);
db.sante = require("./sante.model.js")(mongoose);
db.solidarite = require("./solidarite.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);



module.exports = db;