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