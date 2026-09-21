const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// Port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Running On PORT ${PORT}`);
});