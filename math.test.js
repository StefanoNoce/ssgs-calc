const add = require('./math').add;

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
    expect(add(5, 7)).toBe(12);
});


const diff = require('./math').diff;

test('sbutract 1 and 1 to equal 0', () =>{
    expect(diff(1,1)).toBe(0);
});

test('sbutract 0 and 1 to equal -1', () =>{
    expect(diff(0,1)).toBe(-1);
});