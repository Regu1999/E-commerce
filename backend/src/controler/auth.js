import { createJSONToken, isValidPassword } from '../util/auth.js';
import Users from '../model/Users.js';
import bcryptjs from 'bcryptjs';

const { hash } = bcryptjs;

import { validationResult } from "express-validator"

export const signUp = async (req, res, next) => {
  const errorResult = validationResult(req)
  const { UserName, email, password } = req.body;

  if (!errorResult.isEmpty()) {
    console.log(errorResult.array());
    return res.status(422).json({

      message: 'User signup failed due to validation errors.',
      errors: errorResult.array(),
    });
  }
  try {
    const generatedPwd =await hash(password, 12)
    const createdUser = await Users({ UserName, email, password: generatedPwd });
    await createdUser.save();
    const getUser = await Users.findOne({ email: email }).select({ email: 1, UserName: 1 })
    const authToken = createJSONToken(getUser);
    res
      .status(201)
      .json({ message: 'User created.', user: getUser, token: authToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  let user;
  try {
    user = await Users.findOne({ email });
    if (!user) {
      throw new Error("User Not Found")
    }
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed.' });
  }

  const pwIsValid = await isValidPassword(password, user.password);
  if (!pwIsValid) {
    return res.status(422).json({
      message: 'Invalid credentials.',
      errors: { credentials: 'Invalid email or password entered.' },
    });
  }

  const token = createJSONToken({ email: user.email, UserName: user.UserName });
  res.status(200).json({ token });
};

export const autoLogin = async (req, res) => {
  const token = await req.token;
  let email = token.email
  let user;
  try {
    user = await Users.findOne({ email });
    if (!user) {
      throw new Error("User Not Found")
    }
  } catch (error) {
    return res.status(401).json({ message: 'Token expired' });
  }

  res.status(200).json({ email: user.email, UserName: user.UserName })
}

