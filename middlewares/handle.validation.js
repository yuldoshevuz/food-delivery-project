const { matchedData, validationResult } = require('express-validator')

module.exports = (req, res, next) => {
    const result = validationResult(req)

    if (!result.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: result.array()
        })
    }

    req.body = matchedData(req, { locations: ["body"] });
    req.params = matchedData(req, { locations: ["params"] });
    req.query = matchedData(req, { locations: ["query"] });

    next()
}