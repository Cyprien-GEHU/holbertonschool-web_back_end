const request = require('request');
const { expect } = require('chai');
const { response } = require('./api');

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