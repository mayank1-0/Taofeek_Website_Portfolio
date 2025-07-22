import express from 'express';

const app = express();

const path = require('path');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.set('view engine', 'ejs');
console.log('📁 Express is looking for views in:', app.get('views')); 

console.log('Looking for views in:', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  res.render('home');
});

// app.get('/services', function (req, res) {
//   res.render('services');
// });

// app.get('/portfolio', function (req, res) {
//   res.render('portfolio');
// });

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/websitept', function (req, res) {
  res.render('websitept');
});

app.get('*', function (req, res) {
  res.render('error');
});

// app.listen(process.env.PORT || 3000, console.log(`App is running`))

export default app;
