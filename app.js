const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const users = require('./routers/user');
const config = require('./config/database');

const port = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.database);

//routers 
app.use('/users', users);


//index router 
app.get('/', (req, res) =>{
	res.send('app runnig');
});


app.listen(port, (req, res) => {
	console.log('Server started on port '+port);
});