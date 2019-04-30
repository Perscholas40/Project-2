const express = require('express');
const path = require('path');
const app = express();
// const expbs = require('express-handlebars')
const methodOverride = require('method-override');
const studentsApi = require('./API/studentsAPI.js')

app.use(express.urlencoded())
app.use(methodOverride('_method'));
// app.engine('handlebars', expbs({ 
//   defaultLayout: 'main', 
//   layoutsDir: 'views/'
// }));


app.set('view engine', 'hbs');

// Landing Page
app.get('/', (req, res) => {
  res.render('landing')
});

// Students
app.get('/registerStudents', (req, res) => {
  studentsApi.allStudents()
    .then(students => {
      res.render('Students/all', { students })
    })
});

app.get('/registerStudents/new', (req, res) => {
  res.render('Students/create')
})

app.post('/registerStudents', (req, res) => {
  studentsApi.createStudents(req.body)
    .then(() => {
      res.redirect('/registerStudents')
    })
});

app.get('/registerStudents/:id', (req, res) => {
  studentsApi.showStudents(req.params.id)
  .then(student => {
    res.render('Students/single', {student})
  })
})

app.get('/registerStudents/:id/replace', (req, res) => {
  studentsApi.showStudents(req.params.id)
  .then(student => {
    res.render('Students/replace', {student})
  })
})

app.put('/registerStudents/:id', (req, res) => {
  studentsApi.replaceStudents(req.params.id, req.body)
  .then(() => {
    res.redirect('/registerStudents')
  })
})

app.delete('/registerStudents/:id', (req,res) => {
  studentsApi.deleteStudents(req.params.id)
  .then(() => {
    res.redirect('/registerStudents')
  })
})

app.get('Donors', (req, res) => {
  res.render('Donors')
});

// Instructors 
app.get('Instructors', (req, res) => {
  res.render('Students')
});





// Static Style Folder
app.use(express.static(path.join(__dirname, 'Public')));






const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server started on port...'));



