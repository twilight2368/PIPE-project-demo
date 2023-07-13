const uuid = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const pool = require("../connection/database");
dotenv.config();

module.exports.signup_post = async (req, res) => {
  try {
    const input = req.body;
    console.log(input)
    const data = await pool.query("select * from users where username = $1", [
      input.username,
    ]);
    //console.log(data.rows[0]);
    if (data.rows[0]) {
      throw { error: "Already existed", code: 1 };
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashpass = await bcrypt.hash(input.password, salt);
      const insert = await pool.query(
        "insert into users (user_id, username, email, password_hash, balance, status, create_time ) values ($1, $2, $3, $4, 0, 't', current_date)",
        [uuid.v4(), input.username, input.email, hashpass]
      );
      res.json(insert);
    }
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ error: error });
  }
};

module.exports.login_post = async (req, res) => {
  try {
    const data_input = req.body;
    //console.log(data_input);
    const something = await pool.query(
      "select * from users where username = $1",
      [data_input.username]
    );
    //console.log(something.rows[0])
    if (something.rows[0]) {
      const userid = something.rows[0].user_id;
      const username_d = something.rows[0].username;
      const check_pass = await bcrypt.compare(
        data_input.password,
        something.rows[0].password_hash
      );
      if (check_pass) {
        const token = jwt.sign({ userid }, process.env.SECRET_KEY);
        //console.log(token);
        res.cookie("jwt", token, {
          SameSite: "none", // Allow cross-origin requests
          secure: true, // Use HTTPS
          httpOnly: true,
          maxAge: 3 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ username: username_d });
      } else {
        throw { error: "Wrong password" };
      }
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(403).json({ error: error });
    console.log(error);
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
