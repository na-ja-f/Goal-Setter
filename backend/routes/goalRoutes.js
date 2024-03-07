const express = require('express')
const router = express.Router()

const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController')
// * auth middleware
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals)

module.exports = router