import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeRemoveEmptyStrings = `function removeEmptyStrings(twoDStrings) {
  // Write your code here
};`;

const handlerRemoveEmptyStrings = (fn: any) => {
  try {
    const testCases = [
      [["", "Hello"], ["", "World", ""]],
      [[]],
      [["", "nonempty", "", "", "populated"]],
    ];

    const expectedResults = [
      [["Hello"], ["World"]],
      [[]],
      [["nonempty", "populated"]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedResults[i]);
    }

    return true;
  } catch (error: any) {
    console.log("removeEmptyStrings handler function error:", error);
    throw new Error(error);
  }
};

export const removeEmptyStrings: Problem = {
  id: "remove-empty-strings",
  title: "Remove Empty Strings",
  problemStatement: `<p class='mt-3'>Write a function that removes all empty strings from a 2D list.</p>`,
  examples: [
    {
      id: 1,
      inputText: '[["", "Hello"], ["", "World", ""]]',
      outputText: '[["Hello"], ["World"]]',
      explanation: `All empty strings are removed from each sublist.`
    },
    {
      id: 2,
      inputText: "[[]]",
      outputText: "[[]]",
      explanation: `An empty list remains unchanged.`
    },
    {
      id: 3,
      inputText: '[["", "nonempty", "", "", "populated"]]',
      outputText: '[["nonempty", "populated"]]',
      explanation: `All empty strings are removed, leaving only non-empty strings.`
    }
  ],
  constraints: `<li class='mt-2'>2D list of strings.</li>`,
  handlerFunction: handlerRemoveEmptyStrings,
  starterCode: starterCodeRemoveEmptyStrings,
  order: 3,
  starterFunctionName: "function removeEmptyStrings("
};