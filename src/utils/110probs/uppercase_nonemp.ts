import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeUppercaseNonempty = `function uppercaseNonempty(strings) {
  // Write your code here
};`;

const handlerUppercaseNonempty = (fn: any) => {
  try {
    const testCases = [
      [["hello", "", "world", "PYTHON"]],
      [[""]],
      [[]],
    ];

    const expectedOutputs = [
      ["HELLO", "", "WORLD", "PYTHON"],
      [""],
      [],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Pass the array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("uppercaseNonempty handler function error:", error);
    throw new Error(error);
  }
};

export const uppercaseNonempty: Problem = {
  id: "uppercase-nonempty",
  title: "Change All Non-Empty Strings to Uppercase",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>uppercaseNonempty</code> that converts all non-empty strings in a list to uppercase, 
    leaving empty strings unchanged. This should be done in-place.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["hello", "", "world", "PYTHON"]`,
      outputText: `["HELLO", "", "WORLD", "PYTHON"]`,
      explanation: `The non-empty strings are converted to uppercase, while the empty string remains unchanged.`
    },
    {
      id: 2,
      inputText: `[""]`,
      outputText: `[""]`,
      explanation: `The list contains only an empty string, so it remains unchanged.`
    },
    {
      id: 3,
      inputText: `[]`,
      outputText: `[]`,
      explanation: `An empty list remains unchanged.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ strings.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerUppercaseNonempty,
  starterCode: starterCodeUppercaseNonempty,
  order: 2,
  starterFunctionName: "function uppercaseNonempty("
};