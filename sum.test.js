const { sum, myFunction } = require('./sum');

// below is a simple test case
test('adds 1 + 2, equals to 3', () => { // test function
    expect(sum(1, 2)).toBe(3);  // toBe is one kind of matcher
})

test('object assignment', ()=>{
    const data = { one : 1};
    data['two'] = 2;

    expect(data).toEqual({ one : 1, two : 2});
})

test('Null is Falsy',()=>{
    const n = null;
    expect(n).toBeFalsy();
})

test('one is truthy',()=>{
    const n = 1;
    expect(n).toBeFalsy();
    // expect(n).toBeTruthy();
})

test('Throws on invalid input',()=>{
    expect(()=>{
        myFunction('lindi')
    }).toThrow();
})

