const router = require('express').Router()

const controllers = require('../controllers/user.controller');

router.get('/', controllers.all)
router.get('/:id', controllers.one)
router.post('/', controllers.create)

module.exports = router;