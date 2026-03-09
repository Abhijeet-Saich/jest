// unit testing ---> to test elementary pieces of code eg- Function, Classes

function sum(a, b){
    return a + b;
}

function myFunction(n){
    if(typeof n !== 'number'){
        throw new Error('Invalid Input');
    }
}

function fetchData(callback){
    setTimeout(() => {
        callback('peanut butter')
    }, 1000)
}

function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('peanut butter'), 1000);
    })
}

module.exports = { sum, myFunction, fetchData, fetchPromise };

