const express = require('express');
const path = require('path');

const app = express();

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