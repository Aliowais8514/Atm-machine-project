import inquirer from "inquirer";
//intialize user balance and pin
let mybalance = 5000;
let mypin = 1234;
//print welcom message
console.log("welcome to code with owais - ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "ENTER YOUR PIN CODE:"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("pin is correct login sucessfully!");
    // console.log("current account balance is ${my balance}")
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdrawamount", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdrawamount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > mybalance) {
            console.log("insufficient balance");
        }
        else {
            mybalance -= amountAns.amount,
                console.log(`${amountAns.amount} withdrawl sucessfully`);
            console.log(`your remainig balance is: ${mybalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balance is: ${mybalance}`);
    }
}
else {
    console.log("pin is incorrect, try again!");
}
