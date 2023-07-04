const cors = require("cors");
const express = require("express");
const app = express();
const env = require("dotenv");
const cookieParser = require("cookie-parser");
const dataRoutes = require("./routes/dataRoutes");
const authRoutes = require("./routes/authRoutes");
env.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000", // The origin of the front-end
    credentials: true, // Allow cookies
  })
);

app.get('/', async (req, res) => {
   res.send('hello world');
})

app.use(authRoutes)
app.use(dataRoutes);

app.listen(process.env.PORT, () => {
  console.log("App listening on port " + process.env.PORT);
});