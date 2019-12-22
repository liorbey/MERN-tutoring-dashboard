const express = require('express');
const { check } = require('express-validator');

const studentControllers = require('../controllers/student-controllers');

const router = express.Router();

router.get('/',studentControllers.getStudents)
router.get('/:sid', studentControllers.getStudentById);

//router.get('/user/:uid', studentControllers.getStudentsByUserId);

router.post(
  '/',
  [
    check('name')
      .not()
      .isEmpty(),
    check('level')
      .not()
      .isEmpty(),
    check('subject')
      .not()
      .isEmpty(),
    check('address')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
  ],
  studentControllers.createStudent
);

//update functionality (not embedded)
/*
router.patch(
  '/:sid',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  studentsControllers.updateStudent
);
*/

//delete functionality
//router.delete('/:sid', studentsControllers.deleteStudent);

module.exports = router;
