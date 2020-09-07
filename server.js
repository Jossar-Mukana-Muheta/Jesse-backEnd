const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const app = express();

var corsOptions = {
  origin: "https://jesse-96e14.web.app", 
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Gestion de fichiers
app.use('/images', express.static(path.join(__dirname, 'images')));

// simple route
require("./app/routes/exemple.routes")(app);
require("./app/routes/education.routes")(app);
require("./app/routes/espoir.routes")(app);
require("./app/routes/event.routes")(app);
require("./app/routes/jeunesse.routes")(app);
require("./app/routes/projets.routes")(app);
require("./app/routes/sante.routes")(app);
require("./app/routes/solidarite.routes")(app);
require("./app/routes/user.routes")(app);

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });