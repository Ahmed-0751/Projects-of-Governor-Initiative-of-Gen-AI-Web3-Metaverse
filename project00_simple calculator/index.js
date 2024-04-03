// simple calculator
import inquirer from "inquirer";
// taking input from user
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'firstNumber',
        message: 'Enter first number: '
    },
    {
        type: 'number',
        name: 'secondNumber',
        message: 'Enter second number: '
    },
    {
        type: 'list',
        name: 'Operation',
        message: 'select operation which you want to perform with these numbers',
        choices: ["Addition", "Subtraction", "Multiply", "Divide"]
    }
]);
// if-Else condition to perform operations
if (answer.Operation === 'Addition') {
    console.log("Result: ", answer.firstNumber + answer.secondNumber);
}
else if (answer.Operation === 'Subtraction') {
    console.log("Result: ", answer.firstNumber - answer.secondNumber);
}
else if (answer.Operation === 'Multiply') {
    console.log("Result: ", answer.firstNumber * answer.secondNumber);
}
else {
    console.log("Result: ", answer.firstNumber / answer.secondNumber);
}
