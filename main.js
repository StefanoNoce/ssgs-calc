const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const myMath = require('./math');

function validateOperator(operator) {
    return new Promise((resolve, reject) => {
        switch (operator) {
            case '+':
                promptForNumbers().then(({ a, b }) => {
                    const result = myMath.add(Number(a), Number(b));
                    console.log('The result is: ', result);
                    resolve();
                }).catch((err) => {
                    console.log('Error:', err);
                    reject(err);
                });
                break;
            case '-':
                promptForNumbers().then(({ a, b }) => {
                    const result = myMath.subtract(Number(a), Number(b));
                    console.log('The result is: ', result);
                    resolve();
                }).catch((err) => {
                    console.log('Error:', err);
                    reject(err);
                });
                break;
            case '*':
                promptForNumbers().then(({ a, b }) => {
                    const result = myMath.multiply(Number(a), Number(b));
                    console.log('The result is: ', result);
                    resolve();
                }).catch((err) => {
                    console.log('Error:', err);
                    reject(err);
                });
                break;
            case '/':
                promptForNumbers().then(({ a, b }) => {
                    const result = myMath.divide(Number(a), Number(b));
                    console.log('The result is: ', result);
                    resolve();
                }).catch((err) => {
                    console.log('Error:', err);
                    reject(err);
                });
                break;
            case '^':
                promptForNumbers().then(({ a, b }) => {
                    const result = myMath.pow(Number(a), Number(b));
                    console.log('The result is: ', result);
                    resolve();
                }).catch((err) => {
                    console.log('Error:', err);
                    reject(err);
                });
                break;
            default:
                console.log('Wrong operator!');
                resolve();
        }
    });
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

function randomGreatings(){
    const greetings = ['Bye!', 'See you soon!'];
    return greetings[Math.floor(Math.random() * greetings.length)];
}

(async function main() {
    while (true) {
        console.log('Here is a list of all available operators:');
        console.log('+ , - , *, /, ^');
        const operator = await getInputData('Select operator: ');
        await validateOperator(operator);
        const answer = (await getInputData('Do you want to continue? (y,n): ')).toLowerCase();
        if (answer == 'n') {
            break;
        }
    }

    console.log(randomGreatings());
})();