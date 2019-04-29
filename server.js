const express = require ('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const routes = require('./routes/index')

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/Public')));
app.use('/', routes); 
app.use(methodOverride('_method'));



const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log('Server started on port...'));



