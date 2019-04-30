const express = require ('express');
const path = require('path');
const app = express();
const expbs = require('express-handlebars')
const methodOverride = require('method-override');


app.engine('handlebars', expbs({ 
  defaultLayout: 'main', 
  layoutsDir: 'views/'
}));


app.set('view engine', 'hbs');

// Routing

// Landing Page
app.get('/', (req,res) => {
  res.render('Donors')
});

// Register Page
app.get('/register', (req,res) => {
  res.render('Instructors')
});

// Donate Page
app.get('/donate', (req,res) => {
  res.render('Students')
});





// Static Style Folder
app.use(express.static(path.join(__dirname, 'Public')));


app.use(methodOverride('_method'));



const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log('Server started on port...'));



