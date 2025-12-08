const mocha = require("mocha");
const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("calculateNumber", () => {
    it("Should return sum of intergers", () => {
        assert.strictEqual(calculateNumber(1, 2), 3);
        assert.strictEqual(calculateNumber(-3, 3), 0);
        assert.strictEqual(calculateNumber(-2, -3), -5);
        assert.strictEqual(calculateNumber(10, 5), 15);
        assert.strictEqual(calculateNumber(0, 0), 0)
    });

    it("Should return sum of float", () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3);
        assert.strictEqual(calculateNumber(-3.5, 3.5), 1);
        assert.strictEqual(calculateNumber(-2.6, -3.8), -7);
        assert.strictEqual(calculateNumber(10.3, 5.1), 15);
        assert.strictEqual(calculateNumber(0.2, 0.7), 1);
    });
});
