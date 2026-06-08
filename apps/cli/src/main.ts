//All npm run inside a docker container: docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app node:24-slim sh
// npm install -D(short for --save-dev), install the tools you need when requried for compilation and testing the code

// Run by: npm run dev -- ask "" (Check scripts in root package.json)

//Reaches into your downloaded "commander" package inside "node_modules" and extract Command class
import { Command } from "commander"
// Use .js beacuse Typescript does not alter import path when it compiles your code
import {askCommand} from "./commands/ask.js"
import {validateConfig} from "./util/config.js"



// Instantiate a new instance of Command class and store variables in program
const program = new Command()

// Validate startup config
try 
{
    validateConfig();
}
// Try-catch block for error
catch(error)
{
    console.error("\nConfiguration Error: ");
    console.error(error);
    process.exit(1);
}

program
  .name("ace")
  .description("Autonomous Codebase Engineer")
  .version("0.1.0");

/**
 * Register: ace ask "<question>"
*/
program  
  .command("ask")
  .description("Ask a question about a repo")
  .argument("<question>","Question to ask")
  .action(
    async(question:string) =>
  {
    await askCommand({question});
  }
  );

/**
 * Parse command line input
 * 
 * Without this line, Commander does nothing
 */
program.parse()
