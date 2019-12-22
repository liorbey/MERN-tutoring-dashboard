const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const studentsRoutes = require('./routes/student-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With,Content-Type,Accept,Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH, DELETE');
  next();
});

app.use('/api/students', studentsRoutes); // => /api/students...
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

mongoose
  .connect(`mongodb+srv://${process.env.Database_user}:${process.env.Database_pass}@cluster0-v86a7.mongodb.net/${process.env.Database_name}?retryWrites=true&w=majority`)
  .then(()=> {
    app.listen(process.send.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });

