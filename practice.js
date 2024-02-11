
/* Comment: This is a good start, but there are a few things that need to be fixed.
#  Path: practice.js
1. Filenames should always include the file extension, so it should be practice.js, not just practice.
2. You are using var, which is not recommended, use let or const instead.
3. You are using prompt-sync, which is not recommended, use readline instead.
4. You are using math.floor and math.random, which is not correct, use Math.floor and Math.random instead.

I will make these changes and add comments to the code. */
"use strict";

/* Comment: This line requires installing & using the prompt-sync module, so program will fail if it's not installed */
// const ps = require("prompt-sync");

/* Suggestion: lets use readline instead, import as an ES module */
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});
// const prompt = ps({sigint: true});

/* Suggestion: Avoid using var, use let or const instead */
// var names = [];
let names = [];

/* Comment: You have declared names again below, also we are now using readline so you can remove this line */
// var names = prompt("enter youre names :")
readline.question("Enter a list of names separated by commas: ", (answer) => {
  // split the string into an array
  answer.split(",").forEach((item) => {
    list.push(item);
  });
  console.log(list);
  readline.close();
});

/* Comment: We are using readline now, so you can remove this block */
// const randomSelector =(names)=>{
//     let i = names.length ;
//     var randomstring =math.floor(math.random()*i) ;
//     console.log(randomstring);
// }

readline.on("close", () => {
  let random = list[Math.floor(Math.random() * list.length)];
  console.log(random);
});

// randomSelector()
