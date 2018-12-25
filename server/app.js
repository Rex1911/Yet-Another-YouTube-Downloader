const express = require("express");
const app = express();
const ytdl = require("ytdl-core");
const path = require("path");
const bodyParser = require('body-parser')

//==============================
//       INITIAL SETUP
//==============================
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//==============================

app.get("/" , (req,res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

app.post("/api/getinfo", (req,res) => {
    let link = req.body.videoUrl;
    console.log("Recieved reqest on /api/getinfo");
    ytdl.getInfo(link, (err,info) => {
        if(err) {
            res.json({err: "Something went wrong. Please check the URL"});
        } else {
            res.json(info);
        }
    })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log("Server started at port " + PORT);
});