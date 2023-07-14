const pool = require("../connection/database")

//get all game in store
module.exports.allgames_get = async ( req, res ) => {
        try {
            const data = await pool.query(
              "SELECT * FROM public.game_small_details"
            );
            if (data.rows[0]) {
              res.status(200).json(data.rows)
            }else{
              throw { error: "404 Notfound" };
            }
        } catch (error) {
            res.status(404).json({err: "Not found"})
        }
}

//get single game in the store
module.exports.game_get = async (req, res) => {
  const id = req.params.id;
  //console.log(id);
  try {
    const data = await pool.query(
      'SELECT * FROM game_super_details WHERE game_id = $1', [id]
    );
    if (data.rows[0]) {
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

//
module.exports.allcategory_get = async (req, res) => {
  try {
    const data = await pool.query(
      "select * from genres"
    );
    if (data.rows[0]) {
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.allgameincategory_get = async (req, res) => {
  const category_id = req.params.categoryid
  try {
    const data = await pool.query(
      "select * from belongs_to left join game_small_details using (game_id) join genres using (genre_id) where genre_id = $1",
      [category_id]
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.infordeveloper = async (req, res) => {
  const dev_id = req.params.dev_id;
  try {
    console.log(dev_id)
    const data = await pool.query(
      "select * from game_dev where developer_id = $1",
      [dev_id]
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows[0]);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.allgameofdevloper = async (req, res) => {
  const dev_id = req.params.dev_id;
  try {
    //console.log(dev_id)
    const data = await pool.query("select * from game_small_details where developer_id = $1", [dev_id]);
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.randombanner = async (req, res) => {
  try {
    //console.log(dev_id)
    const data = await pool.query(
      "select * from game_small_details order by random() limit 1",
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows[0]);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};


module.exports.randomformain = async (req, res) => {
  try {
    //console.log(dev_id)
    const data = await pool.query(
      "select * from game_small_details order by random() limit 8"
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.randomforgernemain = async (req, res) => {
  try {
    //console.log(dev_id)
    const data = await pool.query(
      "select * from genres order by random() limit 4"
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.randomforgernegame = async (req, res) => {
  const genre_id = req.params.id;
  try {
    //console.log(genre_id)
    const data = await pool.query(
      "select * from genres join belongs_to using (genre_id) join game_small_details using (game_id) where genre_id = $1 order by random() limit 4",
      [genre_id]
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.cheapgame = async (req, res) => {
  try {
    const data = await pool.query(
      "select * from game_super_details where price > 0 order by price asc limit 6"
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.topfree = async (req, res) => {
  try {
    const data = await pool.query("select * from top_free_games");
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.toppaid = async (req, res) => {
  try {
    const data = await pool.query(
      "select * from top_paid_games order by revenue desc limit 10"
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.superseach = async (req, res) => {
  //console.log(req.body.search)
  const search = req.body.search;
  try {
    const data = await pool.query(
     'select * from search_specify( $1 )', [search]
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.genresforone = async (req, res) => {
  //console.log(req.body.search)
  const search = req.params.id;
  //console.log(search);
  try {
    const data = await pool.query(
      "select genre_id, genre_name from belongs_to join genres using (genre_id) where game_id = $1",
      [search]
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.chartforall = async (req, res) => {
  //console.log(req.body.search)
  const search = req.params.id;
  //console.log(search);
  try {
    if (search === 'TOPPAID') {
      const data = await pool.query(
        "select game_small_details.* from top_paid_games join game_small_details using (game_id) limit 10"
      );
      if (data.rows[0]) {
        //console.log(data.rows)
        res.status(200).json(data.rows);
      } else {
        throw { error: "404 Notfound" };
      }
    }else if (search === "TOPFREE") {
      const data = await pool.query(
        "select game_small_details.*  from top_free_games join game_small_details using (game_id) limit 10"
      );
      if (data.rows[0]) {
        //console.log(data.rows)
        res.status(200).json(data.rows);
      } else {
        throw { error: "404 Notfound" };
      }
    }else if (search === "TOPDOWNLOAD") {
      const data = await pool.query(
        "select game_id, game_name ,dev_name, developer_id, rating from game_super_details where downloaded >= 1 order by downloaded desc limit 10",
      );
      if (data.rows[0]) {
        //console.log(data.rows)
        res.status(200).json(data.rows);
      } else {
        throw { error: "404 Notfound" };
      }
    }else if (search === "TOPRATING") {
      const data = await pool.query(
        "select * from game_small_details where rating is not null order by rating desc limit 10"
      );
      if (data.rows[0]) {
        //console.log(data.rows)
        res.status(200).json(data.rows);
      } else {
        throw { error: "404 Notfound" };
      }
    }else{
      throw { error: "404 Notfound" };
    }


  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.useraccount = async (req, res) => {
  //console.log(req.body.search)
  const search = req.params.id;
  //console.log(search);
  try {
    const data = await pool.query(
      "select username, email, phone_number, balance from users where username = $1",
      [search]
    );
    if (data.rows[0]) {
      //console.log(data.rows)
      res.status(200).json(data.rows[0]);
    } else {
      throw { error: "404 Notfound" };
    }
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};