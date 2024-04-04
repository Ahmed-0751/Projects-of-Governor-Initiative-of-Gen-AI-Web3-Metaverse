#! /usr/bin/env node
import inquirer from "inquirer";

// create an empty array
let todo: any = [];

while (true) {    //using while loop to give more comfort to user
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "Select an operation",
            choices: ["Add", "Update", "Delete", "View", "Exit"]
        }
    ]);

    if (answer.options === "Add") {
        let answerAdd = await inquirer.prompt([
            {
                type: "input",
                name: "add",
                message: "Enter items in the list"
            }
        ]);
        todo.push(answerAdd.add);
    } else if (answer.options === "View") {
        console.log("Your list: ");
        for (let i = 0; i < todo.length; i++) {
            console.log(i + 1, ") ", todo[i]);
        }
    } else if (answer.options === "Update") {
        let ansIdx = await inquirer.prompt([
            {
                type: "number",
                name: "startIdx",
                message: "Enter the index no of the item from which you want to delete: "
            },
            {
                type: "number",
                name: "delCount",
                message: "How many elements you want to delete: "
            },
            {
                type: "input",
                name: "newItem",
                message: "Enter item which you want to add: "
            }
        ]);
        // update the array using splice method
        todo.splice(ansIdx.startIdx-1, ansIdx.delCount, ansIdx.newItem);
    } else if (answer.options === "Delete") {
        let ansIdx = await inquirer.prompt([
            {
                type: "number",
                name: "startIdx",
                message: "Enter the index no of the item from which you want to delete: "
            },
            {
                type: "number",
                name: "delCount",
                message: "How many elements you want to delete: "
            }
        ]);
        // delte the items of an array using splice method
        todo.splice(ansIdx.startIdx-1, ansIdx.delCount);
    } else if (answer.options === "Exit") {
        break;
    }
}
