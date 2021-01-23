const router = require('express').Router()
const controller = require('../controllers/index')

//users router

router.get('/users', controller.users().get);
router.post('/users', controller.users().post);
router.put('/users', controller.users().put);
router.delete('/users', controller.users().delete);

router.get('/tasks',controller.tasks().get);
router.post('/tasks', controller.tasks().post);
router.put('/tasks', controller.tasks().put);
router.delete('/tasks', controller.tasks().delete);

// router.get('/tasks/join')
module.exports=router