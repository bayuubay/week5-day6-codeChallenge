const router = require('express').Router();
const api = require('./api');//untuk router
router.use('/api', api);
module.exports = router;