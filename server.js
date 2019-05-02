const express = require('express');
// const path = require('path');
const app = express();
const methodOverride = require('method-override');
const studentsApi = require('./API/studentsAPI.js')
const instructorsApi = require('./API/instructorsAPI.js')
const donorsApi = require('./API/donorsAPI.js')
app.use('/public', express.static("public"))
app.use(express.urlencoded())
app.use(methodOverride('_method'));
app.set('views engine', 'hbs');


// Landing Page
app.get('/', (req, res) => {
  res.render('landing')
});
// #######################################################
// ################### STUDENTS ##########################
// #######################################################

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

// #######################################################
// ################### INSTRUCTORS #######################
// #######################################################

app.get('/registerInstructors', (req, res) => {
  instructorsApi.allInstructors()
    .then(instructor => {
      res.render('Instructors/all', { instructor })
    })
});

app.get('/registerInstructors/new', (req, res) => {
  res.render('Instructors/create')
})

app.post('/registerInstructors', (req, res) => {
  instructorsApi.createInstructors(req.body)
    .then(() => {
      res.redirect('/registerInstructors')
    })
});

app.get('/registerInstructors/:id', (req, res) => {
  instructorsApi.showInstructors(req.params.id)
  .then(instructor => {
    res.render('Instructors/single', {instructor})
  })
})

app.get('/registerInstructors/:id/replace', (req, res) => {
  instructorsApi.showInstructors(req.params.id)
  .then(instructor => {
    res.render('Instructors/replace', {instructor})
  })
})

app.put('/registerInstructors/:id', (req, res) => {
  instructorsApi.replaceInstructors(req.params.id, req.body)
  .then(() => {
    res.redirect('/registerInstructors')
  })
})

app.delete('/registerInstructors/:id', (req,res) => {
  instructorsApi.deleteInstructors(req.params.id)
  .then(() => {
    res.redirect('/registerInstructors')
  })
})
// #######################################################
// ################### DONORS ############################
// #######################################################

app.get('/registerDonors', (req, res) => {
  donorsApi.allDonors()
    .then(donor => {
      res.render('Donors/all', { donor })
    })
});

app.get('/registerDonors/new', (req, res) => {
  res.render('Donors/create')
})

app.post('/registerDonors', (req, res) => {
  donorsApi.createDonors(req.body)
    .then(() => {
      res.redirect('/registerDonors')
    })
});

app.get('/registerDonors/:id', (req, res) => {
  donorsApi.showDonors(req.params.id)
  .then(donor => {
    res.render('Donors/single', {donor})
  })
})

app.get('/registerDonors/:id/replace', (req, res) => {
  donorsApi.showDonors(req.params.id)
  .then(donor => {
    res.render('Donors/replace', {donor})
  })
})

app.put('/registerDonors/:id', (req, res) => {
  donorsApi.replaceDonors(req.params.id, req.body)
  .then(() => {
    res.redirect('/registerDonors')
  })
})

app.delete('/registerDonors/:id', (req,res) => {
  donorsApi.deleteDonors(req.params.id)
  .then(() => {
    res.redirect('/registerDonors')
  })
})







const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log('Server started on port...')
});



