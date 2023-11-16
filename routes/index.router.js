const { Router } = require('express')
const router = Router()

const { oneOf, body } = require("express-validator");
const { signInValidation } = require("../validators/auth.validator");

const { signInUser } = require('../controllers/auth.controller')
const handleValidation = require('../middlewares/handle.validation')

router.post('/signin',
    oneOf([ body('phone'), body('email') ]),
    signInValidation,
    handleValidation,
    signInUser
)

module.exports = router