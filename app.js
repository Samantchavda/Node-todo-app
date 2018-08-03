const express = require('express');
const app = express();
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const TodoControllers = require('./Controllers/TodoController');

var pjson = require('./package.json');

// set up template engine
app.set('view engine' , 'ejs');

//static files
app.use(express.static('./public'));

app.get('/status', (req, res) => res.send('Server is running!!!'));

app.get('/version', (req, res) => res.send({ version: pjson.version }));

//fire controller
TodoControllers(app);

//listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port + '!'));