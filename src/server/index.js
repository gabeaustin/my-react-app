const express = require("express");
const db = require("./config/db");

const app = express();

const PORT = 3001;

// put this here to test and see if is working
// if so, use the db.query code to make the CREATE
/* app.get("/", (req, res) => {
    // res.send("server running");
    // mySQL stmt to check to see if the database connection is working (below)
    db.query(
        "INSERT INTO posts (title, postText, userName) VALUES ('dictum', 'Ut dictum enim.', 'meme')"
    );
}); */

app.get("/", (req, res) => {});

app.post("/api/create", (req, res) => {
    db.query(
    "INSERT INTO posts (title, postText, userName) VALUES ()"), (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    };
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});