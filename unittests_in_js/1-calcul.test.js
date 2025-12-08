const mocha = require("mocha");
const calculateNumber = require("./1-calcul");
const assert = require("assert");

describe("calculateNumber", () => {
    it("Should return sum of intergers with type SUM", () => {
        assert.strictEqual(calculateNumber("SUM", 1, 2), 3);
        assert.strictEqual(calculateNumber("SUM", -3, 3), 0);
        assert.strictEqual(calculateNumber("SUM", -2, -3), -5);
        assert.strictEqual(calculateNumber("SUM", 10, 5), 15);
        assert.strictEqual(calculateNumber("SUM", 0, 0), 0);
        assert.strictEqual(calculateNumber("SU", 2, 8), "wrong type")
    });

    it("Should return sum of float with type SUM", () => {
        assert.strictEqual(calculateNumber("SUM", 1.0, 2.0), 3);
        assert.strictEqual(calculateNumber("SUM", -3.5, 3.5), 1);
        assert.strictEqual(calculateNumber("SUM", -2.6, -3.8), -7);
        assert.strictEqual(calculateNumber("SUM", 10.3, 5.1), 15);
        assert.strictEqual(calculateNumber("SUM", 0.2, 0.7), 1);
        assert.strictEqual(calculateNumber("SUD", -2.5, 9.5), "wrong type");
    });

    it("Should return subtarction of intergers with type SUBTRACT", () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 4, 2), 2);
        assert.strictEqual(calculateNumber("SUBTRACT", -3, 3), -6);
        assert.strictEqual(calculateNumber("SUBTRACT", -2, -3), 1);
        assert.strictEqual(calculateNumber("SUBTRACT", 10, 5), 5);
        assert.strictEqual(calculateNumber("SUBTRACT", 0, 0), 0);
        assert.strictEqual(calculateNumber("SUBTRAC", 2, 8), "wrong type")
    });

     it("Should return subtraction of float with type SUBTRACT", () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 5.3, 1.5), 3);
        assert.strictEqual(calculateNumber("SUBTRACT", -3.9, 7.1), -11);
        assert.strictEqual(calculateNumber("SUBTRACT", -8.4, -10.9), 3);
        assert.strictEqual(calculateNumber("SUBTRACT", 4.8, 7.3), -2);
        assert.strictEqual(calculateNumber("SUBTRACT", 0.3, 0.3), 0);
        assert.strictEqual(calculateNumber("SUBTRAC", 2.4, 8.8), "wrong type");
    });

        it("Should return diviton of intergers with type DIVIDE", () => {
        assert.strictEqual(calculateNumber("DIVIDE", 5, 2), 2.5);
        assert.strictEqual(calculateNumber("DIVIDE", 6, -5), -1.2);
        assert.strictEqual(calculateNumber("DIVIDE", -9, -7), 1.2857142857142858);
        assert.strictEqual(calculateNumber("DIVIDE", 15, 5), 3);
        assert.strictEqual(calculateNumber("DIVIDE", 0, 8), 0);
        assert.strictEqual(calculateNumber("DIVIDE", 10, 0), "Error");
        assert.strictEqual(calculateNumber("DIVID", 18, 6), "wrong type")
    });

     it("Should return divition of float with type DIVIDE", () => {
        assert.strictEqual(calculateNumber("DIVIDE", 4.2, 6.9), 0.5714285714285714);
        assert.strictEqual(calculateNumber("DIVIDE", 6.3, -4.2), -1.5);
        assert.strictEqual(calculateNumber("DIVIDE", -3.3, -9.9), 0.3);
        assert.strictEqual(calculateNumber("DIVIDE", 12.4, 4.1), 3);
        assert.strictEqual(calculateNumber("DIVIDE", 0.0, 8.7), 0);
        assert.strictEqual(calculateNumber("DIVIDE", 10.0, 0.0), "Error");
        assert.strictEqual(calculateNumber("DIVIE", 18.0, 6.0), "wrong type")
    });

});
