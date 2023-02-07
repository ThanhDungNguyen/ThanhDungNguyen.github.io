const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getNumber(number) {
    if (number == "stop") {
        console.log("Close and stop");
        readline.close();
    }
    else {
        readline.question('Give me more number: ', number => {
            getNumber(number);
        });
    }
}

readline.question('Give me a number: ', number => {
    getNumber(number);
});
