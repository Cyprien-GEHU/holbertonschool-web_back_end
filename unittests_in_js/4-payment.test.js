const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const assert = require("assert");
const Utils = require("./utils");

describe("Send request to api", () => {
    it("return the sum of total amount and total shipping", () => {
        const spy = sinon.spy(console, "log");
        const stub = sinon.stub(Utils, "calculateNumber").returns(10);

        sendPaymentRequestToApi(100,20);
        assert(stub.calledOnceWithExactly("SUM", 100, 20));
        assert(spy.calledOnceWithExactly("The total is: 10"));

        stub.restore();
        spy.restore();
    });
});