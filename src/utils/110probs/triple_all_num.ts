import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeTripleAll = `function tripleAll(listsOfIntegers) {
  // Write your code here
};`;

const handlerTripleAll = (fn: any) => {
  try {
    const testCases = [
      [[[1, 2], [3, 4]]],
      [[[], [0, -1], [5]]],
      [[[10], [-2, -2]]],
    ];

    const expectedOutputs = [
      [[3, 6], [9, 12]],
      [[], [0, -3], [15]],
      [[30], [-6, -6]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("tripleAll handler function error:", error);
    throw new Error(error);
  }
};

export const tripleAll: Problem = {
  id: "triple-all",
  title: "Triple All Numbers",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>tripleAll</code> that takes a 2D list of integers and multiplies each integer by 3 in place.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1, 2], [3, 4]]`,
      outputText: `[[3, 6], [9, 12]]`,
      explanation: `Each number is multiplied by 3.`
    },
    {
      id: 2,
      inputText: `[[], [0, -1], [5]]`,
      outputText: `[[], [0, -3], [15]]`,
      explanation: `Each number is multiplied by 3, including negative numbers and zero.`
    },
    {
      id: 3,
      inputText: `[[10], [-2, -2]]`,
      outputText: `[[30], [-6, -6]]`,
      explanation: `Each number is multiplied by 3.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ listsOfIntegers.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerTripleAll,
  starterCode: starterCodeTripleAll,
  order: 1,
  starterFunctionName: "function tripleAll("
};