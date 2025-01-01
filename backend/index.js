const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Routes = require("./routes/route.js");

const app = express();

// Load environment variables from .env file
dotenv.config();

// Constants
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cors({
    origin: process.env.CLIENT_URL || "*", // Adjust for stricter security
    credentials: true, // Allow credentials if needed
}));

// Database Connection
mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.error("NOT CONNECTED TO NETWORK", err);
        process.exit(1); // Exit process if DB connection fails
    });

// Routes
app.use("/", Routes);

// Root Endpoint (Optional)
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
