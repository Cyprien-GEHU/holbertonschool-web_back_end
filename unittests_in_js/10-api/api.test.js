const request = require('request');
const { expect } = require('chai');

describe ("test api express status code and result ", () => {
    it("should test request reponse", (done) => {
        request("http://localhost:7865/", (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it ("should return the reponse of GET /", (done) => {
        request("http://localhost:7865/", (error, res, body) => {
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });
});

describe ("test api express request for cart ", () => {
    it("should test request reponse on number case", (done) => {
        request("http://localhost:7865/cart/12", (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal("Payment methods for cart 12");
            done();
        });
    });

    it ("should test request reponse on not number case", (done) => {
        request("http://localhost:7865/cart/hello", (error, res, body) => {
            expect(res.statusCode).to.equal(404);
            expect(body).to.equal("ID Not Found");
            done();
        });
    });
});

describe ("test api express status code and result for available_payments", () => {
    it("should test request reponse of available_payments", (done) => {
        request("http://localhost:7865/available_payments", (error, res, body) => {
            const res_json = { payment_methods: { credit_cards: true, paypal: false}}
            expect(JSON.parse(body)).to.deep.equal(res_json)
            done();
        });
    });
});

describe ("test api express status code and result for login", () => {
    it("should test request reponse for userName=Betty", (done) => {
        request.post({url: "http://localhost:7865/login", json: { "userName": "Betty" }},
            (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal("Welcome Betty")
            done();
        });
    });
});
