const router = require("express").Router()
// const stripe = require("stripe")(process.env.STRIPE_KEY)
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY)

router.post("/payment", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create(
    {
      // source: req.body.card.token,
      amount: req.body.amount,
      currency: "usd",
      payment_method_types: ["card"],
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr)
      } else {
        res.status(200).json(stripeRes)
      }
    }
  )
})

module.exports = router
