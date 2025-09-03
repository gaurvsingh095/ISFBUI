import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeUppercaseVowels = `function uppercaseVowels(listsOfStrings) {
  // Write your code here
};`;

const handlerUppercaseVowels = (fn: any) => {
  try {
    const testCases = [
      [[["banana", "fly"], ["Apple"]]],
      [[[]]],
      [[["boot", "EEk"]]],
    ];

    const expectedOutputs = [
      [["bAnAnA", "fly"], ["ApplE"]],
      [[]],
      [["bOOt", "EEk"]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("uppercaseVowels handler function error:", error);
    throw new Error(error);
  }
};

export const uppercaseVowels: Problem = {
  id: "uppercase-vowels",
  title: "Uppercase Vowels Only",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>uppercaseVowels</code> that converts only vowels ('a', 'e', 'i', 'o', 'u') to uppercase in each string, leaving consonants alone. 
    Modify the list in place and return it.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[["banana", "fly"], ["Apple"]]`,
      outputText: `[["bAnAnA", "fly"], ["ApplE"]]`,
      explanation: `"banana" -> "bAnAnA", "fly" -> "fly" (no vowels to uppercase), "Apple" -> "ApplE"`
    },
    {
      id: 2,
      inputText: `[[]]`,
      outputText: `[[]]`,
      explanation: `An empty list remains unchanged.`
    },
    {
      id: 3,
      inputText: `[["boot", "EEk"]]`,
      outputText: `[["bOOt", "EEk"]]`,
      explanation: `"boot" -> "bOOt", "EEk" remains unchanged as vowels are already uppercase.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ listsOfStrings.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerUppercaseVowels,
  starterCode: starterCodeUppercaseVowels,
  order: 6,
  starterFunctionName: "function uppercaseVowels("
};