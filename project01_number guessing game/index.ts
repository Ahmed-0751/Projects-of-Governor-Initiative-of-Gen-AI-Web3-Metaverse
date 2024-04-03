import inquirer from "inquirer";

// Generate a random number using Random function
let generatedNum: number = Math.floor(Math.random() * 10);

// using loop to contiue the game if guess is wrong
while (true) {
    // taking input from user
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "guess",
            message: "Guess the number between 1 to 10"
        }
    ]);

    let ans: number = answer.guess;

    // condition to check whether user guessed correct number or not
    if (generatedNum == ans) {
        console.log("Congratulations! You guessed correct number.");
        break; // exit the loop 
    } else {
        if(generatedNum>ans){
            console.log("Incorrect! Guess Higher Number");
        }else{
            console.log("Incorrect! Guess Lower Number");
        }
    }
};