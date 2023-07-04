const uuid = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const pool = require("../connection/database");
dotenv.config();

module.exports.signup_post = async (req, res) => {
  try {
    const input = req.body;
    const data = await pool.query("select * from myuser where user_name = $1", [
      input.user_name,
    ]);
    //console.log(data.rows[0]);
    if (data.rows[0]) {
      throw { error: "Already existed", code: 1 };
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashpass = await bcrypt.hash(input.password, salt);
      const insert = await pool.query(
        "insert into myuser (user_id, user_name, email, password) values ($1, $2, $3, $4)",
        [uuid.v4(), input.user_name, input.email, hashpass]
      );
      res.json(insert);
    }
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ error: error });
  }
};

module.exports.signin_post = async (req, res) => {
  try {
    const data_input = req.body;
    const something = await pool.query(
      "select * from myuser where user_name = $1",
      [data_input.user_name]
    );
    if (something.rows[0]) {
      const user_id = something.rows[0].user_id;
      //console.log(user_id);
      const check_pass = await bcrypt.compare(
        data_input.password,
        something.rows[0].password
      );
      if (check_pass) {
        const token = jwt.sign({ user_id }, process.env.SECRET_KEY);
        //console.log(token);
        res.cookie("jwt", token, {
          sameSite: "none", // Allow cross-origin requests
          secure: true, // Use HTTPS
          httpOnly: true,
          maxAge: 3 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ user_id: user_id });
      } else {
        throw { error: "Wrong password" };
      }
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(403).json({ error: error });
    //console.log(error);
  }
};

module.exports.logout_get = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
