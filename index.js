const express = require('express')
const { checkSchema, oneOf, body, matchedData, validationResult} = require('express-validator')

const { signInValidation } = require('./validators/auth.validator')
const router = require('./routes/index.router')

const app = express()
app.use(express.json())
app.use(router)

app.listen(5000, () => console.log('Server running on port:', 5000))