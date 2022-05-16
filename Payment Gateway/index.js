const express = require('express');
const app = express();
const path = express('path');
const stripe = require('stripe')("Add your secret key");

const YOUR_DOMAIN = "https://nerds737.github.io";

//static files
app.use(express.static(path.join(__dirname, "views")));

//middleware
app.use(express.json());

//routes
app.post("/payment", async(req,res) => {
const {product} = req.body;
const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
        {
            pricedata: {
                currency: "inr",
                product_data: {
                    name: product.name,
                    images: [product.image]
                },
                unit_amount:product.amount*100, 
            },
            quantity: product.quantity,
        }
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`
})

res.json({id: session.id})
})

//listening
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port ${port}...'));
