const User = require("../model/User")
const CryptoJS = require("crypto-js")
const { verifyTokenAndAuthorization } = require("./verifyToken")

const router = require("express").Router()

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString()
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
