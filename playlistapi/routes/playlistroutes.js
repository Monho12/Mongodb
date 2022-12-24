const experss = require("express");
const {
  createPlaylist,
  getPlaylist,
} = require("../controllers/playlistController");

const router = experss.Router();

router
  .get("/lists", getPlaylist)
  .post("/lists", createPlaylist)
  .put("/list/:id", () => {})
  .delete("/list/id", () => {});

exports.playlistroutes = router;
