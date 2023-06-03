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

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Static Folder (images, css, fonts etc)
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
    console.log(`Swag Opossums near you at: http://localhost:3000`)
})