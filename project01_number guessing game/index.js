import inquirer from "inquirer";
// Generate a random number using Random function
let generatedNum = Math.floor(Math.random() * 10);
while (true) {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "guess",
            message: "Guess the number between 1 to 10"
        }
    ]);
    let ans = answer.guess;
    if (generatedNum == ans) {
        console.log("Congratulations! You guessed correct number.");
        break;
    }
    else {
        if (generatedNum > ans) {
            console.log("Incorrect! Guess Higher Number");
        }
        else {
            console.log("Incorrect! Guess Lower Number");
        }
    }
}
;
