const express = require('express')
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the payment system");
});

app.get('/cart/:id', (req, res) => {
    const Id = req.params.id

    if (/^\d+$/.test(Id)) {
        res.send(`Payment methods for cart ${Id}`);
    } else {
        res.status(404).send("ID Not Found")
    }
});

app.get('/available_payments', (req, res) => {
    res.json({ payment_methods: {
        credit_cards: true,
        paypal: false
    }});
});

app.post('/login', (req, res) => {
    const username = req.body.userName;
    res.send(`Welcome ${username}`);
});

if (require.main === module) {
    app.listen(7865, () => {
        console.log("API available on localhost port 7865")
    });
}

module.exports = app;