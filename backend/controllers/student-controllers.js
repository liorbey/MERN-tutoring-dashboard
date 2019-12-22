const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');
const Student = require('../models/student');

const getStudents = async (req, res, next) => {
  let students;
  try{
    students = await Student.find({},'-password');
  } catch (err){
    const error = new HttpError('cant fetch students',500);
    return next(error);
  }
  res.json({ students: students.map(student=>student.toObject({getters:true}))});
};

const getStudentById = async (req, res, next) => {
  const studentId = req.params.sid; // { sid: 's1' }

  let student;
  try{
    student = await Student.findById(studentId);
  } catch(err){
    const error = new HttpError('something off, no student for this id',500);
    return next(error)
  }

  if (!student) {
    const error = new HttpError('No student for this id.', 404);
  return next(error);
  }
  res.json({ student: student.toObject({getters: true}) }); // => { student } => { student: student }
};

// function getStudentById() { ... }
// const getStudentById = function() { ... }

/*
const getStudentsByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const students = DUMMY_STUDENTS.filter(s => {
    return s.creator === userId;
  });

  if (!students || students.length === 0) {
    return next(
      new HttpError('No student for this id.', 404)
    );
  }

  res.json({ students });
};
*/

const createStudent = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs.', 422)
    );
  }

  const { name,level, subject, description, address } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  // const title = req.body.title;
  const createdStudent = new Student({
    name,
    level,
    subject,
    address,
    description,
    location: coordinates,
    }
  );
  try{
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdStudent.save({session:sess});
    await sess.commitTransaction();
  } catch(err){
    const error = new HttpError("failed to create a student",500);
  
  return next(error);
}
  
  res.status(201).json({ student: createdStudent });
};


//update student
/*
const updateStudent = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }

  const { title, description } = req.body;
  const studentId = req.params.sid;

  const updatedStudent = { ...DUMMY_STUDENTS.find(s => s.id === studentId) };
  const studentIndex = DUMMY_STUDENTS.findIndex(s => s.id === studentId);
  updatedStudent.title = title;
  updatedStudent.description = description;

  DUMMY_STUDENTS[studentIndex] = updatedStudent;

  res.status(200).json({ student: updatedStudent });
};
*/

//delete student
/*
const deleteStudent = (req, res, next) => {
  const studentId = req.params.sid;
  if (!DUMMY_STUDENTS.find(s => s.id === studentId)) {
    throw new HttpError('Could not find a student for that id.', 404);
  }
  DUMMY_STUDENTS = DUMMY_STUDENTS.filter(s => s.id !== studentId);
  res.status(200).json({ message: 'Deleted student.' });
};
*/

exports.getStudents = getStudents;
exports.getStudentById = getStudentById;
//exports.getStudentsByUserId = getStudentsByUserId;
exports.createStudent = createStudent;
//exports.updateStudent = updateStudent;
//exports.deleteStudent = deleteStudent;
