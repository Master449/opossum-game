const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');


const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Static Folders (CSS + Vue Components)
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// 404 Catch-all
app.get('*', (req, res) => {
    console.log("404: User Tried Requesting -> " + req.url)
    res.sendFile(__dirname + "/views/404.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})