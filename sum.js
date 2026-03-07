// unit testing ---> to test elementary pieces of code eg- Function, Classes

function sum(a, b){
    return a + b;
}

function myFunction(n){
    if(typeof n !== 'number'){
        throw new Error('Invalid Input');
    }
}

module.exports = { sum, myFunction };

