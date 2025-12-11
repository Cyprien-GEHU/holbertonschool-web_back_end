const express = require('express')
const app = express();


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

if (require.main === module) {
    app.listen(7865, () => {
        console.log("API available on localhost port 7865")
    });
}

module.exports = app;