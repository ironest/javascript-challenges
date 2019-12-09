tweets = [];

const index = (req, res) => {
    res.json(tweets);
};

const create = (req, res) => {
    let { username, content } = req.body
    let tweet = { username, content }
    tweets.push(tweet);
    res.json(tweet);
};

const read = (req, res) => {
    const idx = req.params.idx;
    if (idx >= 0 && idx < tweets.length)
        res.json(tweets[idx]);
    else
        res.status(404).send(`Tweet with id ${idx} does not exist`)
};

const update = (req, res) => {
    const idx = req.params.idx;
    let { username, content } = req.body
    let tweet = { username, content }

    if (idx >= 0 && idx < tweets.length){
        tweets[idx] = tweet;
        res.json(tweets[idx]);
    } else
        res.status(404).send(`Tweet with id ${idx} does not exist`)
};

const deleteResource = (req, res) => {
    const idx = req.params.idx;
    if (idx >= 0 && idx < tweets.length){
        tweets.splice(idx, 1);
        res.redirect("/tweets");
    } else
        res.status(404).send(`Tweet with id ${idx} does not exist`)
};

module.exports = {
    index,
    create,
    read,
    update,
    deleteResource
};