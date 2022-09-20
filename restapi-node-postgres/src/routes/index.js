const {Router} =  require('express');

const router = Router();

const { getUsers, createUsers, getUserById } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUsers);

module.exports = router;