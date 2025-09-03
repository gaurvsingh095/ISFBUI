import assert from "assert";
import { Problem } from "../types/problem";

const starterCodePadAllStrings = `function padAllStrings(strings) {
  // Write your code here
};`;

const handlerPadAllStrings = (fn: any) => {
  try {
    const testCases = [
      ["hello", "world"],
      ["pad", "this", "string"],
      ["", "empty", "test"],
      [],
      ["single"],
    ];

    const expectedOutputs = [
      ["**hello**", "**world**"],
      ["**pad**", "**this**", "**string**"],
      ["**", "**empty**", "**test**"],
      [],
      ["**single**"],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("padAllStrings handler function error:", error);
    throw new Error(error);
  }
};

export const padAllStrings: Problem = {
  id: "pad-all-strings",
  title: "Pad All Strings",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>padAllStrings</code> that adds two asterisks around each string in a list of strings. 
    The asterisks should be added in-place.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["hello", "world"]`,
      outputText: `["**hello**", "**world**"]`,
      explanation: `Each string is surrounded by asterisks.`
    },
    {
      id: 2,
      inputText: `["pad", "this", "string"]`,
      outputText: `["**pad**", "**this**", "**string**"]`,
      explanation: `Each string is surrounded by asterisks.`
    },
    {
      id: 3,
      inputText: `["", "empty", "test"]`,
      outputText: `["**", "**empty**", "**test**"]`,
      explanation: `An empty string and other strings are surrounded by asterisks.`
    },
    {
      id: 4,
      inputText: `[]`,
      outputText: `[]`,
      explanation: `An empty list remains unchanged.`
    },
    {
      id: 5,
      inputText: `["single"]`,
      outputText: `["**single**"]`,
      explanation: `A single string is surrounded by asterisks.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ strings.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerPadAllStrings,
  starterCode: starterCodePadAllStrings,
  order: 6,
  starterFunctionName: "function padAllStrings("
};