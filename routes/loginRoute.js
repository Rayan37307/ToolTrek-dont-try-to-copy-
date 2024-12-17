import express from 'express';
const routerLogin = express.Router();
import {loginController} from '../controllers/loginController.js';

// Define the routes

routerLogin.post('/login', loginController);

export default routerLogin;