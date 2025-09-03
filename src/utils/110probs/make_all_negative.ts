import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMakeAllNegative = `function makeAllNegative(nums) {
  // Write your code here
};`;

const handlerMakeAllNegative = (fn: any) => {
  try {
    const testCases = [
      [0, 2, -3, 4],
      [],
      [-1, -5, -10],
    ];

    const expectedOutputs = [
      [0, -2, -3, -4],
      [],
      [-1, -5, -10],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn([...testCases[i]]); // Pass a copy of the array to avoid in-place modification issues
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("makeAllNegative handler function error:", error);
    throw new Error(error);
  }
};

export const makeAllNegative: Problem = {
  id: "make-all-negative",
  title: "Make All Negative",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>makeAllNegative</code> that modifies the list in-place, 
    converting all positive numbers or zeros to their negative counterparts. 
    Negative numbers remain unchanged.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[0, 2, -3, 4]`,
      outputText: `[0, -2, -3, -4]`,
      explanation: `Positive numbers and zero are converted to negative: [0, -2, -3, -4].`
    },
    {
      id: 2,
      inputText: `[]`,
      outputText: `[]`,
      explanation: `The list is empty, so it remains unchanged.`
    },
    {
      id: 3,
      inputText: `[-1, -5, -10]`,
      outputText: `[-1, -5, -10]`,
      explanation: `Negative numbers remain unchanged: [-1, -5, -10].`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ nums.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerMakeAllNegative,
  starterCode: starterCodeMakeAllNegative,
  order: 1,
  starterFunctionName: "function makeAllNegative("
};