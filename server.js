const express = require('express');
const db = require('./db')
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use('/api', require('./api'))

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

db.sync()
	.then(db.seed)

app.listen(process.env.PORT || 8888);