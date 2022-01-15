const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//Settings
app.set('appName', 'FreeRol');
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views')); // INDICAMOS DONDE SE ENCUENTRA LA CARPETA VIEWS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); // INDICAMOS EL MOTOR DE PLANTILLA

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use(require('./routes/'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

// Listening the server
app.listen(app.get('port'), () => {
  console.log(app.get('appName'));
  console.log('Servidor en puerto', app.get('port'))
});
