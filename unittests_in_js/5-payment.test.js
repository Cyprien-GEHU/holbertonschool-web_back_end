const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const assert = require("assert");
const Utils = require("./utils");

describe("Send request to api", () => {
    let spy;

    beforeEach(() =>{
        spy = sinon.spy(console, "log");
    });

    afterEach(() => {
        spy.restore();
    });

    it("return the total is: 120", () => {
        sendPaymentRequestToApi(100, 20);
        assert(spy.calledOnceWithExactly("The total is: 120"));
        assert.strictEqual(spy.calledOnce, true);
    });

     it("return the total is: 20", () => {
        sendPaymentRequestToApi(10, 10);
        assert(spy.calledOnceWithExactly("The total is: 20"));
        assert.strictEqual(spy.calledOnce, true);
    });
});