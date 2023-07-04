const pool = require("../connection/database")


module.exports.allgames_get = async ( req, res ) => {
        try {
            const data = await pool.query("select * from game_publisher order by game_id");
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json({err: "Not found"})
        }
}

module.exports.game_get = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const data = await pool.query(
      "select * from game_publisher where game_id = $1", [id]
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.game_get = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const data = await pool.query(
      "select * from game_publisher where game_id = $1",
      [id]
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.allcategory_get = async (req, res) => {
  try {
    const data = await pool.query(
      "select * from category"
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};

module.exports.allgameincategory_get = async (req, res) => {
  const category_id = req.params.categoryid
  try {
    const data = await pool.query("select * from game_category where category_id = $1", [category_id]);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ err: "Not found" });
  }
};