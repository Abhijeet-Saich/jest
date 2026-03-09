const { sum, myFunction, fetchData, fetchPromise } = require('./sum');

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

test('The data is peanut', done => {
    function callback(data){
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
})

test('promise peanut butter',()=>{
    return expect(fetchPromise()).resolves.toBe('peanut butter');
})

test('fetch failing', ()=>{
    return expect(fetchPromise()).rejects.toThrow('error');
})

test('async tester', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
})

test('mock implementation of a basic function',() => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43)
    expect(mock).toHaveBeenCalledWith(1);
})

test('spying on a method on a object',() => {
    const video = {
        play(){
            return true;
        },
    };

    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
})




