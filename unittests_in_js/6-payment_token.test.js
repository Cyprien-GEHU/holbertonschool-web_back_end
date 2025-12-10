const getPaymentTokenFromAPI = require("./6-payment_token")
const { expect } = require("chai")

describe ("getPaymentTokenFromAPI unitest", () => {
    it("should return getPaymentTokenFromAPI result", (done) => {
        getPaymentTokenFromAPI(true)
            .then((res) => {
                expect(res).to.eql({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});