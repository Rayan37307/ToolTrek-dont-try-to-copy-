import express from 'express';
const routerRegister = express.Router();
import registerController from '../controllers/registerController.js';

// Define the routes

routerRegister.post('/register', registerController);

export default routerRegister;