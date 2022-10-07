const express = require('express');
const router = express.Router();


router.use('/user', require('./v1/users'));

// Error handler
// router.use(errorHandler);

module.exports = router;