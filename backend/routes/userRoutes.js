const express = require('express')
const router = express.Router()
// * controller
const { registerUser, loginUser, getMe } = require('../controllers/userController')
// * middleware
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect , getMe)

module.exports = router