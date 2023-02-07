const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;

function getNumber(number) {
    if (number == "stop") {
        console.log("Sum: " + sum);
        readline.close();
    }
    else {
        sum += parseInt(number);
        readline.question('Give me more number: ', number => {
            getNumber(number);
        });
    }
}

readline.question('Give me a number: ', number => {
    getNumber(number);
});
