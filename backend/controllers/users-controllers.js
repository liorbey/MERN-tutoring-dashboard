//const uuid = require('uuid/v4');
//const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');
/*
const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};
*/

/*const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find(u => u.email === email);
  if (hasUser) {
    throw new HttpError('Could not create user, email already exists.', 422);
  }

  const createdUser = {
    id: uuid(),
    name, // name: name
    email,
    password
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({user: createdUser});
}; */

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  res.json({message: 'Logged in!'});
};

//exports.getUsers = getUsers;
//exports.signup = signup;
exports.login = login;
