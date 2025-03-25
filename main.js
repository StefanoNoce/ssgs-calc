const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const myMath = require('./math');
const { resolve } = require('path');

function validateOperator(operator) {
    switch (operator) {
        case '+':
            promptForNumbers().then(({ a, b }) => {
                const result = myMath.add(Number(a), Number(b));
                console.log('The result is: ', result);
            }).catch((err) => {
                console.log('', err);
            });
            break;
        case '-':
            promptForNumbers().then(({ a, b }) => {
                const result = myMath.subtract(Number(a), Number(b));
                console.log('The result is: ', result);
            }).catch((err) => {
                console.log('', err);
            });;
            break;
        case '*':
            promptForNumbers().then(({ a, b }) => {
                const result = myMath.multiply(Number(a), Number(b));
                console.log('The result is: ', result);
            }).catch((err) => {
                console.log('', err);
            });;
            break;
        case '/':
            promptForNumbers().then(({ a, b }) => {
                const result = myMath.divide(Number(a), Number(b));
                console.log('The result is: ', result);
            }).catch((err) => {
                console.log('', err);
            });;
            break;
        case '^':
            promptForNumbers().then(({ a, b }) => {
                const result = myMath.pow(Number(a), Number(b));
                console.log('The result is: ', result);
            }).catch((err) => {
                console.log('', err);
            });;
            break;

        default:
            console.log('Wrong operator!');
    }

    function promptForNumbers() {
        return new Promise((resolve, reject) => {
            getInputData("Insert first number: ").then((a) => {
                getInputData("Insert second number: ").then((b) => {
                    resolve({ a, b });
                }).catch(reject);
            }).catch(reject);
        });
    }
}

// Function to get input data from the user
function getInputData(inputText) {
    const request = readline.createInterface({
        input: input,
        output: output
    });

    return new Promise((resolve) => {
        request.question(inputText, (answer) => {
            request.close();
            resolve(answer);
        });
    });
}

// Example usage
console.log('Here is a list of all available operator:');
console.log('+ , - , *, /, ^');
getInputData('Select operator: ').then((operator) => {
    validateOperator(operator);
});
console.log('Bye!');