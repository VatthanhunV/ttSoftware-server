const express = require("express");
const router = express.Router();

// Controller
const {
  createUser,
  listUsers,
  readUsers,
  updateUser,
  removeUser,
} = require("../controller/users.js");

router.post("/ttsoftware", createUser);
router.get("/ttsoftware", listUsers);
router.get("/ttsoftware/:id", readUsers);
router.put("/ttsoftware/:id", updateUser);
router.delete("/ttsoftware/:id", removeUser);

module.exports = router;
