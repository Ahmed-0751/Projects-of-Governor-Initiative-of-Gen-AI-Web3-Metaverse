#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Wellcome message
console.log(chalk.greenBright.bold("             Wellcome to HBL ATM Service"));
// Set user curr balance & PIN
let currBalance = 5000;
let pin = 1234;
// Maximum number of attempts allowed
let maxAttempts = 3;
let remainingAttempt = maxAttempts;
// Loop for PIN entry and validation
while (remainingAttempt > 0) {
    // Ask user to enter pin
    let answerPin = await inquirer.prompt([
        {
            type: "number",
            name: "pin",
            message: "Enter your PIN"
        }
    ]);
    // Check whether the pin entered is correct or not
    if (answerPin.pin === pin) {
        console.log(chalk.blueBright.bold("Congratulations! LogIn Successfully."));
        // Ask user to perform any operation
        let answerOperation = await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                message: "Select an operation",
                choices: ["Check Balance", "Withdraw"]
            }
        ]);
        // Check which operation does the user want to perform
        if (answerOperation.operation === "Check Balance") {
            console.log(chalk.blueBright(`Your current balance is ${currBalance}.`));
            console.log(chalk.blueBright.bold("Thanks for using our ATM service."));
        }
        else if (answerOperation.operation === "Withdraw") {
            let answerAmount = await inquirer.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "Enter amount to withdraw"
                }
            ]);
            if (answerAmount.amount > currBalance) {
                console.log("Insufficient Balance");
            }
            else {
                currBalance -= answerAmount.amount;
                console.log(`Rs. ${answerAmount.amount} has withdrawn Successfully!`);
                console.log(chalk.blueBright(`Your remaining balance is ${currBalance}.`));
                console.log(chalk.blueBright.bold("Thanks for using our ATM service."));
            }
        }
        break; // Exit the loop if PIN is correct
    }
    else {
        console.log(chalk.redBright.bold("Invalid PIN! Try Again."));
        remainingAttempt--;
        // Handle maximum attempts reached
        if (remainingAttempt === 0) {
            console.log(chalk.white.bgRed.bold("   Maximum attempts reached. Account locked!!!   "));
            break;
        }
    }
}
