const express = require("express");
const router = express.Router();
const mockData = require("../public/mockData/mockData");

/* GET devices listing. */
router.get("/", (req, res) => {
  res.status(200).send(mockData);
});

module.exports = router;
