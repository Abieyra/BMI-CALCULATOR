#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "Enter your weight in Kg:", type: "number", name: "weightinKg" },
    { message: "Enter your height in Meter:", type: "number", name: "heightinMeter" },
    {
        message: "Enter your weight in Kg:",
        type: "number",
        name: "weightinKg",
    },
    {
        message: " Enter height in meter:",
        type: " number",
        name: "heightinMeter"
    },
]);
let bmi = answers.weightinKg / (answers.heightinMeter * answers.heightinMeter);
if (bmi < 18.5) {
    console.log("underweight");
}
else if (bmi >= 18.5 && bmi < 25) {
    console.log("normalweight");
}
else if (bmi >= 25 && bmi < 30) {
    console.log("overweight");
}
else {
    console.log("please enter a valid value");
}
console.log(`your BMI is ${bmi}`);
