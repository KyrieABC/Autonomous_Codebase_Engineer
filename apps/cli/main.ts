//All npm run inside a docker container: docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app node:24-slim sh

// Run by: npx tsx apps/cli/main.ts ask ""

//Reaches into your downloaded "commander" package inside "node_modules" and extract Command class
import { Command } from "commander"

// Instantiate a new instance of Command class and store variables in program
const program = new Command()

//Start configuration of program
program 
  .command("ask") // Registers a sub-command named ask (ask triggers "npx tsx main.ts ask")
  .argument("<question>") // Tells commander to expect a required data followig ask (<> means required)
  .action(async (question) => {console.log(question);}); // Execution code runs if user runs ask command 
  // Command taks <question>, inject into function as question variable.

// Starts your CLI application(Tells Node to look at the raw array of string user tped into terminal, read through configuration rules and match them up)
program.parse()