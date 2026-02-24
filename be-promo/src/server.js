const express = require("express");
const cors = require("cors");
require("dotenv").config();

const promoRoutes = require("./routes/promo.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/promos", promoRoutes);

const PORT = process.env.PORT || 5129;
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});