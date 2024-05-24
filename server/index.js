const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user-route");
const authRoutes = require("./routes/auth-route");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server started on port:${PORT}`);
});

app.get("/", (_req, res) => {
  res.send(`API is running successfully in : ${PORT}!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

