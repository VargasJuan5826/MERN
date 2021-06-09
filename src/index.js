const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const { mongoose } = require('./database');



//Settings
app.set('port', process.env.Port || 3005);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/task.routes'));

//StaticFiles

app.use(express.static(path.join(__dirname,'public')));

//Starting the server
app.listen(app.get('port'), () => {
console.log(`Server On ${app.get('port')}`);

} );