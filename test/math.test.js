const add = require('../src/math').add;

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
    expect(add(5, 7)).toBe(12);
});


const diff = require('../src/math').diff;

test('subtract 1 and 1 to equal 0', () => {
    expect(diff(1, 1)).toBe(0);
});

test('subtract 0 and 1 to equal -1', () => {
    expect(diff(0, 1)).toBe(-1);
});

const multiply = require('../src/math').multiply;

test('multiply 2 and 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
});

test('multiply 2 and -2 to equal -4', () => {
    expect(multiply(2, -2)).toBe(-4);
});

test('multiply 2 and 0 to equal 0', () => {
    expect(multiply(2, 0)).toBe(0);
});

const divide = require('../src/math').divide;

test('divide 1 and 1 to equal 1', () => {
    expect(divide(1, 1)).toBe(1);
});

test('divide 10 and 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('divide 1 and 0 to throw error', () => {
    expect(() => divide(1, 0)).toThrow();
});

const pow = require('../src/math').pow;

test('pow 2 and 2 to be 4', () => {
    expect(pow(2, 2)).toBe(4);
});

test('pow 2 and 10 to be 1024', () => {
    expect(pow(2, 10)).toBe(1024);
});

const sum = require('../src/math').sum;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
    expect(sum(5, 7)).toBe(12);
});

const subtract = require('../src/math').subtract;

test('subtract 1 and 1 to equal 0', () => {
    expect(subtract(1, 1)).toBe(0);
});

test('subtract 0 and 1 to equal -1', () => {
    expect(subtract(0, 1)).toBe(-1);
});