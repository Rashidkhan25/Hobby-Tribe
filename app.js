const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const moment = require("moment");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes for pages
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/corporate', (req, res) => res.render('corporate'));
app.get('/classes', (req, res) => res.render('classes'));
app.get('/interest', (req, res) => {
  const courseTitle = req.query.title;
  res.render('interest', { courseTitle });
});

// Route for Reach Out form (1st form)
app.post('/submit-reach', (req, res) => {
  const formData = req.body;

  const uploadsDir = path.join(__dirname, 'uploads');
  const filePath = path.join(uploadsDir, 'Reach-out.xlsx');

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  let workbook;
  let worksheetData;

  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    worksheetData = xlsx.utils.sheet_to_json(worksheet);
  } else {
    workbook = xlsx.utils.book_new();
    worksheetData = [];
  }

  worksheetData.push(formData);

  const newWorksheet = xlsx.utils.json_to_sheet(worksheetData);
  workbook.SheetNames = [];
  xlsx.utils.book_append_sheet(workbook, newWorksheet, 'Submissions');
  xlsx.writeFile(workbook, filePath);

  res.render('thankyou'); // Or redirect to confirmation
});

// Route for Interest form (2nd form)
app.post("/submit-interest", (req, res) => {
  const formData = {
    Mode: req.body.mode,
    Preference: req.body.preference,
    Days: req.body.days,
    Times: req.body.times,
    Budget: `Rs. ${req.body.budget}`,
    Location: req.body.location
  };

  const uploadsDir = path.join(__dirname, 'uploads');
  const filePath = path.join(uploadsDir, 'user_interest.xlsx');

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  let workbook;
  let worksheetData;

  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    worksheetData = xlsx.utils.sheet_to_json(worksheet);
  } else {
    workbook = xlsx.utils.book_new();
    worksheetData = [];
  }

  worksheetData.push(formData);

  const newWorksheet = xlsx.utils.json_to_sheet(worksheetData);
  workbook.SheetNames = [];
  xlsx.utils.book_append_sheet(workbook, newWorksheet, 'Submissions');
  xlsx.writeFile(workbook, filePath);

  res.render("thankyou");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
