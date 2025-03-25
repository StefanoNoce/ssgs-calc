function add(a, b) {
    return a + b;
}

function sum(a, b) {
    return add(a, b);
}

function diff(a, b) {
    return a - b;
}

function subtract(a, b) {
    return diff(a, b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0)
        throw new Error("Cannot divide by 0");
        
    return a / b;
}

function pow(a, b) {
    let pow = a;

    for (let i = 0; i < b; i++)
        pow = pow * a;

    return pow;

}

module.exports = { add, sum, diff, subtract, multiply, divide, pow };