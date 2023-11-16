const { checkSchema } = require("express-validator");
const users = require('../db/users')

const signInValidation = checkSchema({
    email: {
        optional: true,
        trim: true,
        isEmail: {
            errorMessage: "Invalid format email",
            bail: true
        },
        custom: {
            options: [(value) => {
                const foundUser = users.find(item => item.email === value)

                if (!foundUser) {
                    throw new Error('User not found')
                }
            }]
        }
    },
    phone: {
        optional: true,
        isString: {
            errorMessage: "Phone must be a string",
            bail: true
        },
        trim: true,
        isMobilePhone: {
            errorMessage: 'Invalid format phone number',
            bail: true
        },
        custom: {
            options: [(value) => {
                const foundUser = users.find(item => item.phone === value)

                if (!foundUser) {
                    throw new Error('User not found')
                }
            }],
            bail: true
        }
    },
    password: {
        trim: true,
        isString: {
            errorMessage: 'Password must be a string',
            bail: true
        },
        custom: {
            options: [(value) => {
                const foundUser = users.find(item => item.password === value)

                if (!foundUser) {
                    throw new Error('Password wrong')
                }
            }],
            bail: true
        }
    }
})

module.exports = { signInValidation }