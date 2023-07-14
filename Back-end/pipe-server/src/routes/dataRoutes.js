const express = require("express");
const data_router = express();
const dataController = require('../controllers/dataController')
const requireAuth = require('../middlewares/authRequire')

data_router.get('/all',dataController.allgames_get) 

data_router.get("/all/:id", dataController.game_get)

data_router.get('/category', dataController.allcategory_get)

data_router.get("/category/:categoryid" ,dataController.allgameincategory_get);

data_router.get("/developerinfor/:dev_id", dataController.infordeveloper);

data_router.get("/developer/:dev_id", dataController.allgameofdevloper);

data_router.get("/randomize", dataController.randombanner);

data_router.get("/randomchart", dataController.randomformain);

data_router.get("/randomgenre", dataController.randomforgernemain);

data_router.get("/randomgenre/:id", dataController.randomforgernegame);

data_router.get("/cheapgame", dataController.cheapgame);

data_router.get("/topfree", dataController.topfree);

data_router.get("/toppaid", dataController.toppaid);

data_router.post("/supersearch", dataController.superseach);

data_router.get("/categoryforgame/:id", dataController.genresforone);

data_router.get("/chart/:id", dataController.chartforall);

data_router.get("/useraccount/:id", requireAuth , dataController.useraccount);
module.exports = data_router;