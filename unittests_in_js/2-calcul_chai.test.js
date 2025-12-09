const calculateNumber = require("./2-calcul_chai");
const { expect } = require("chai");

describe("calculateNumber", () => {
    it("Should return sum of intergers with type SUM", () => {
        expect(calculateNumber("SUM", 1, 2)).to.equal(3);
        expect(calculateNumber("SUM", -3, 3)).to.equal(0);
        expect(calculateNumber("SUM", -2, -3)).to.equal(-5);
        expect(calculateNumber("SUM", 10, 5)).to.equal(15);
        expect(calculateNumber("SUM", 0, 0)).to.equal(0);
        expect(calculateNumber("SU", 2, 8)).to.equal("wrong type")
    });

    it("Should return sum of float with type SUM", () => {
        expect(calculateNumber("SUM", 1.0, 2.0)).to.equal(3);
        expect(calculateNumber("SUM", -3.5, 3.5)).to.equal(1);
        expect(calculateNumber("SUM", -2.6, -3.8)).to.equal(-7);
        expect(calculateNumber("SUM", 10.3, 5.1)).to.equal(15);
        expect(calculateNumber("SUM", 0.2, 0.7)).to.equal(1);
        expect(calculateNumber("SUD", -2.5, 9.5)).to.equal("wrong type");
    });

    it("Should return subtarction of intergers with type SUBTRACT", () => {
        expect(calculateNumber("SUBTRACT", 4, 2)).to.equal(2);
        expect(calculateNumber("SUBTRACT", -3, 3)).to.equal(-6);
        expect(calculateNumber("SUBTRACT", -2, -3)).to.equal(1);
        expect(calculateNumber("SUBTRACT", 10, 5)).to.equal(5);
        expect(calculateNumber("SUBTRACT", 0, 0)).to.equal(0);
        expect(calculateNumber("SUBTRAC", 2, 8)).to.equal("wrong type")
    });

     it("Should return subtraction of float with type SUBTRACT", () => {
        expect(calculateNumber("SUBTRACT", 5.3, 1.5)).to.equal(3);
        expect(calculateNumber("SUBTRACT", -3.9, 7.1)).to.equal(-11);
        expect(calculateNumber("SUBTRACT", -8.4, -10.9)).to.equal(3);
        expect(calculateNumber("SUBTRACT", 4.8, 7.3)).to.equal(-2);
        expect(calculateNumber("SUBTRACT", 0.3, 0.3)).to.equal(0);
        expect(calculateNumber("SUBTRAC", 2.4, 8.8)).to.equal("wrong type");
    });

        it("Should return diviton of intergers with type DIVIDE", () => {
        expect(calculateNumber("DIVIDE", 5, 2)).to.equal(2.5);
        expect(calculateNumber("DIVIDE", 6, -5)).to.equal(-1.2);
        expect(calculateNumber("DIVIDE", -9, -7)).to.equal(1.2857142857142858);
        expect(calculateNumber("DIVIDE", 15, 5)).to.equal(3);
        expect(calculateNumber("DIVIDE", 0, 8)).to.equal(0);
        expect(calculateNumber("DIVIDE", 10, 0)).to.equal("Error");
        expect(calculateNumber("DIVID", 18, 6)).to.equal("wrong type")
    });

     it("Should return divition of float with type DIVIDE", () => {
        expect(calculateNumber("DIVIDE", 4.2, 6.9)).to.equal(0.5714285714285714);
        expect(calculateNumber("DIVIDE", 6.3, -4.2)).to.equal(-1.5);
        expect(calculateNumber("DIVIDE", -3.3, -9.9)).to.equal(0.3);
        expect(calculateNumber("DIVIDE", 12.4, 4.1)).to.equal(3);
        expect(calculateNumber("DIVIDE", 0.0, 8.7)).to.equal(0);
        expect(calculateNumber("DIVIDE", 10.0, 0.0)).to.equal("Error");
        expect(calculateNumber("DIVIE", 18.0, 6.0)).to.equal("wrong type")
    });

});
