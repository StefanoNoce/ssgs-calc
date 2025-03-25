function add(a, b) {
    return a + b;
}

function sum(a, b) {
    return add(a, b);
}

function diff(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function pow(a, b) {
    let pow = a;

    for (let i = 0; i < b; i++)
        pow = pow * a;

    return pow;

}

module.exports = { add, sum, diff, multiply, divide, pow };