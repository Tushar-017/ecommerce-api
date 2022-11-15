const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken")

const router = require("express").Router()

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, (req, res) => {})

module.exports = router
