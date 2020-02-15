const express = require ('express');
const app = express();
const morgan = require('morgan');

require('./database');


//------------- MIDDLEWARES --------------------

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


// -------------  SETTINGS --------------------

app.set('port', process.env.PORT || 3000);

//------------- ROUTES --------------------

app.use('/users', require('./routes/index'));

// --------------INICIALIZANDO SERVER ----------------

app.listen(app.get('port'), () => {

        console.log('server on Port', app.get('port'));

});