import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeCompressString = `function compressString(text) {
  // Write your code here
};`;

const handlerCompressString = (fn: any) => {
  try {
    const testCases = [
      ["aaabbbcccaa"],
      [""],
      ["a"],
      ["zzzzy"],
    ];

    const expectedOutputs = [
      "a3b3c3a2",
      "",
      "a1",
      "z4y1",
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Ensure the function is called with a string
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("compressString handler function error:", error);
    throw new Error(error);
  }
};

export const compressString: Problem = {
  id: "compress-string",
  title: "Compress Repeats in a String",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>compressString</code> that compresses consecutive identical characters in a string. 
    For example, "aaabbb" becomes "a3b3". 
    If the string is empty, return an empty string.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"aaabbbcccaa"`,
      outputText: `"a3b3c3a2"`,
      explanation: `Consecutive characters are compressed to "a3", "b3", "c3", "a2".`
    },
    {
      id: 2,
      inputText: `""`,
      outputText: `""`,
      explanation: `The input is empty, so the result is also an empty string.`
    },
    {
      id: 3,
      inputText: `"a"`,
      outputText: `"a1"`,
      explanation: `The single character "a" is compressed as "a1".`
    },
    {
      id: 4,
      inputText: `"zzzzy"`,
      outputText: `"z4y1"`,
      explanation: `Consecutive "z"s are compressed to "z4" and "y" remains as "y1".`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ text.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerCompressString,
  starterCode: starterCodeCompressString,
  order: 7,
  starterFunctionName: "function compressString("
};