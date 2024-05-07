#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";
// welcome message
console.log(chalk.magenta.italic.bold("\n\t#-----------------------------------------------------------------#"));
console.log(chalk.rgb(200, 162, 200).bold.italic("\t\t---------welcome to countdown Timmer---------"));
console.log(chalk.magenta.italic.bold("\t#-----------------------------------------------------------------#\n"));
// asking seconds to start a timmer
let time = await inquirer.prompt([
    {
        name: "clock",
        type: "number",
        message: chalk.rgb(238, 130, 238).italic("\t\t\tType in the duration of seconds."),
    }
]);
function timmer(value) {
    let initSec = new Date().setSeconds(new Date().getSeconds() + value);
    const intervaltime = new Date(initSec);
    setInterval(() => {
        let currentTime = new Date();
        let difftime = differenceInSeconds(intervaltime, currentTime);
        // if the timmer end this message will print
        if (difftime <= 0) {
            console.log(chalk.rgb(75, 0, 130).bold.italic("\n\n\t\t\t'The timmer has come to an end..'"));
            console.log(chalk.magenta.italic.bold(`\n\t #-----------------------------------------------------------------#`));
            console.log(chalk.bold.italic.rgb(200, 162, 200)(`\t\t--------Thank you for using countdown timmer--------\t`));
            console.log(chalk.magenta.italic.bold(`\t #-----------------------------------------------------------------#\n`));
            process.exit();
        }
        const hours = Math.floor(difftime / 3600);
        const minutes = Math.floor((difftime % 3600) / 60);
        const seconds = Math.floor(difftime % 60);
        process.stdout.write(chalk.rgb(221, 160, 221).italic.bold(`\r\n \t\t\t\t${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}\r`));
    }, 1000);
}
let Timer = time.clock;
// if the user write alphbateor any onther character this timmer will not run and print that message
if (Number.isNaN(time.clock)) {
    console.log(chalk.italic.rgb(220, 20, 60)("\n Error: please enter only numerical character"));
}
else {
    timmer(Timer);
}
