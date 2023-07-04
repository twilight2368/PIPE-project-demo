const express = require("express");
const data_router = express();
const dataController = require('../controllers/dataController')
const requireAuth = require('../middlewares/authRequire')

data_router.get('/all', requireAuth ,dataController.allgames_get)

data_router.get("/all/:id", dataController.game_get)

data_router.get('/category', dataController.allcategory_get)

data_router.get("/category/:categoryid", dataController.allgameincategory_get);

module.exports = data_router;