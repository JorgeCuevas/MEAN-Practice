const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const users = require('./routers/user');
const config = require('./config/database');

const app = express();
app.use(cors());
app.use(bodyParser.json());
//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Database connection setting
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('succefully connected to the datadase');
});


mongoose.connection.on('error', (error) => {
	console.log('error trying to connectto the datadase'+error);
});

//routers 
app.use('/users', users);


//index router 
app.get('/', (req, res) =>{
	res.send('app runnig');

});


app.listen(config.port, (req, res) => {
	console.log('Server started on port '+config.port);
});