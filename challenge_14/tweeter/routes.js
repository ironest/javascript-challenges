const express = require("express");
const router = express.Router();

const TweetController = require("./controllers/tweet_controller");

// Below are the routes
// The pattern is as follows
// app.<verb>("route", (req, res)=> {})

router.get("/tweets", TweetController.index);

router.get("/tweets/:idx", TweetController.read);

router.post("/tweets", TweetController.create);

router.put("/tweets/:idx", TweetController.update);
router.patch("/tweets/:idx", TweetController.update);

router.delete("/tweets/:idx", TweetController.deleteResource);

module.exports = router;