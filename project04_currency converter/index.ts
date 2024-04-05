#! /usr/bin/env node
import inquirer from "inquirer";

let conversion = {
    "PKR": {
        "USD": 0.0036 ,
        "EUR": 0.0033 ,
        "PKR": 1 
    },
    "USD": {
        "PKR": 277.90 ,
        "EUR": 0.92 ,
        "USD": 1 
    },
    "EUR": {
        "USD": 1.08 ,
        "PKR": 301.14 ,
        "EUR": 1 
    }
}

const answer: {
    from: "PKR"|"USD"| "EUR",
    to: "PKR"|"USD"| "EUR",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Select your currency",
        choices: ["PKR", "USD", "EUR"]
    },
    {
        type: "list",
        name: "to",
        message: "Select currency to which you want to convert",
        choices: ["PKR", "USD", "EUR"]
    },
    {
        type: "number",
        name: "amount",
        message: "Enter amount"
    }
]);

const {from, to, amount} = answer;

if(from && to && amount){
    let result:number = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}else{
    console.log("Invalid input");
}