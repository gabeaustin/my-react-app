const express = require("express");
const db = require("./config/db");
const cors = require("cors");
// const mysql = require("mysql");
const axios = require("axios").default;
// const { connect } = require("./config/db");


const app = express();

const PORT = 3306;

app.use(cors());
app.use(express.json());

// app.use(async (httpContext, next) => {
//     await next();
//     if (httpContext.Response.StatusCode == 204)
//     {
//         httpContext.Response.ContentLength = 0;
//     }
// });

app.get("/", (req, res) => {
    res.send("Hey, this is cool");
});

const connection = mysql.createConnection({
    host: "localhost",
    user: "austin-blogger1",
    password: "password123",
    database: "blogpoststutorial"
});

connection.connect(() => {
    if (err) {
        console.error(`error connecting ${err.stack}`);
        return;
    }

    console.log(`connected as id ${connection.threadId}`)
})


app.post("/api/create", (req, res) => {
    const username = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;

    console.log(`${userName} ${title} ${text}`)

    // db.query(
    // "INSERT INTO posts (title, postText, userName) VALUES ()"), (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(result);
    //     }
    // };
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});