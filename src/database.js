const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/mern-tasks';

mongoose.connect(URI)
    .then(db=> console.log('DB Is Connected'))
    .catch(err => console.error(err));

module.exports= mongoose;
