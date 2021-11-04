const { Router } = require('express');
const { getTasksCtrl, getTaskCtrl, postTaskCtrl, putTaskCtrl, deleteTaskCtrl } = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl);
router.get('/tasks/:id', getTaskCtrl);
router.post('/tasks', postTaskCtrl);
router.put('/tasks/:id', putTaskCtrl);
router.delete('/tasks/:id', deleteTaskCtrl);

module.exports = router;