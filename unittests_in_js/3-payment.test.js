const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const assert = require("assert");
const Utils = require("./utils");

describe("Send request to api", () => {
    it("return the sum of total amount and total shipping", () => {
        const spy = sinon.spy(Utils, "calculateNumber")
        sendPaymentRequestToApi(100,20);
        assert(spy.calledOnceWithExactly("SUM", 100, 20));
        spy.resetHistory();
        sendPaymentRequestToApi(50,220);
        assert(spy.calledOnceWithExactly("SUM", 50, 220));
        spy.restore();
    });
});