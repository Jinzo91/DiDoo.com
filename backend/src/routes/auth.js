"use strict";

const express        = require('express');
const router         = express.Router();

const middlewares    = require('../middlewares');
const AuthController = require('../controllers/auth');


router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/me', middlewares.checkAuthentication , AuthController.me);
router.get('/logout', AuthController.logout);
router.get('/listvisitor', AuthController.list);
//router.get('/findUser/:username', AuthController.findUser);
module.exports = router;