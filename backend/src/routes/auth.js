import express from 'express'
import { body } from 'express-validator'

import { autoLogin, login, signUp } from "../controler/auth.js"
import { checkAuth } from '../util/auth.js';
import Users from '../model/Users.js';

const router = express.Router();

const validateEmail = () => body('email', 'Please provide valid email address!').trim().isEmail();
const validatePassword = () => body('password', 'Password is required!').isLength({ min: 6 }).withMessage("Invalid password. Must be at least 6 characters long.")

router.post('/signup', [body('UserName').trim().notEmpty(), validateEmail().custom(async (val) => {
    const user = await Users.findOne({ email: val });
    if (user) {
        throw new Error("Email exists already!");
    }
}), validatePassword()], signUp);

router.post('/login', [validateEmail(), validatePassword()], login);


router.get('/userAutoLogin',checkAuth, autoLogin)

export default router;
