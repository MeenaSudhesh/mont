'use strict'

const express = require('express');
const router = express.Router();


const userController = require('../../controllers/userController')
const User = require('../../models/userModel')


router.get('/listUser',  userController.listUser);
router.post('/addUser',  userController.addUser);
router.put('/updateUser/:id',  userController.editUser);
router.get('/viewUser/:id',  userController.viewUser);
router.delete('/deleteUser/:id',  userController.deleteUser);
router.get("/export/visitsReport", userController.visitsReport);


module.exports = router;
