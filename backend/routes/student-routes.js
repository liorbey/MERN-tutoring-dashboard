const express = require('express');
const { check } = require('express-validator');

const studentControllers = require('../controllers/student-controllers');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/',studentControllers.getStudents)
router.get('/:sid', studentControllers.getStudentById);

router.use(checkAuth);

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
router.delete('/:sid', studentControllers.deleteStudent);

module.exports = router;
