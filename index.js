const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors());

app.use(bodyParser.json());

// Importer les routes pour chaque sport
const rugbyRoutes = require("./routes/rugby");
const footballRoutes = require("./routes/football");
const tennisRoutes = require("./routes/tennis");
const volleyballRoutes = require("./routes/volleyball");
const cyclingRoutes = require("./routes/cycling");

// Utiliser les routes
app.use("/rugby", rugbyRoutes);
app.use("/football", footballRoutes);
app.use("/tennis", tennisRoutes);
app.use("/volleyball", volleyballRoutes);
app.use("/cycling", cyclingRoutes);

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
