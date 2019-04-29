const express = require ('express');
const path = require('path');
const app = express();
const expbs = require('express-handlebars')
const methodOverride = require('method-override');
const routes = require('./routes/index')

app.engine('handlebars', expbs({ 
  defaultLayout: 'main', 
  layoutsDir: 'views/layouts'
}));


app.set('view engine', 'hbs');

// Routing

// Landing Page
app.get('/', (req,res) => {
  res.render('landing')
});

// Register Page
app.get('/register', (req,res) => {
  res.render('register')
});

// Donate Page
app.get('/donate', (req,res) => {
  res.render('donate')
});

// Brass Instruments Page
app.get('/brass', (req,res) => {
  res.render('brass')
});

// Woodwind Instruments Page
app.get('/woodwinds', (req,res) => {
  res.render('woodwinds')
});

// Percussion Page
app.get('/percussion', (req,res) => {
  res.render('percussion')
});

// Static Folder
app.use(express.static(path.join(__dirname, 'Public')));


app.use('/', routes); 
app.use(methodOverride('_method'));



const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log('Server started on port...'));



