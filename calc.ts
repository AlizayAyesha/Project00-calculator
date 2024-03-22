// Importing inquirer lib for user input
import inquirer from 'inquirer';

// Importing arithmetic operations from split up modules
import { addition } from "./add.js";
import { subtraction } from "./sub.js";
import { multiplication } from "./mul.js";
import { division } from "./div.js";

// Define asynchronous function to handle calculator logic
async function main() {
    // Choices for user's selection
    const choices = ['addition', 'subtraction', 'multiplication', 'division'];

    // Prompt users to choose an operation using inquirer
    const { operation } = await inquirer.prompt({
        type: 'list',
        name: 'operation',
        message: 'Please select an operation:',
        choices,
    });

    // Prompt user to input two numbers using 'inquirer'
    const { n1, n2 } = await inquirer.prompt([
        {
            type: 'input',
            name: 'n1',
            message: 'Enter the first number:',
            validate: input => !isNaN(input), // Validate numeric input
        },
        {
            type: 'input',
            name: 'n2',
            message: 'Enter the second number:',
            validate: input => !isNaN(input), // Validate numeric input
        }
    ]);

    let result;

    // Perform the chosen operation based on user selection
    switch (operation) {
        case 'addition':
            result = addition(Number(n1), Number(n2));
            break;
        case 'subtraction':
            result = subtraction(Number(n1), Number(n2));
            break;
        case 'multiplication':
            result = multiplication(Number(n1), Number(n2));
            break;
        case 'division':
            result = division(Number(n1), Number(n2));
            break;
        default:
            result = NaN; // Set result to NaN if operation is not recognized
            break;
    }

    console.log('Result:', result);
}

// Call main function to run the calculator program
main();
