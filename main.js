#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        // = += -= 
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is" + myBalance);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the amount which you withdrawl",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`You have successfully withdrawl $${fast.fastcash} \n Your remaining balance is: $${myBalance}`);
    }
    else if (operationAns.opeartion === "check balance") {
        console.log(`your remaining balance is: $${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
