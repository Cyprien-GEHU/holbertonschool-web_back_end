const calculateNumber = (type, a, b) => {

    switch(type){
        case "SUM":
            return Math.round(a) + Math.round(b);
        case "SUBTRACT":
            return Math.round(a) - Math.round(b);
        case "DIVIDE":
            return b === 0 ? "Error" : Math.round(a) / Math.round(b);
        default:
            throw new Error("wrong type");

    }
}
module.exports = calculateNumber;