import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMaxWindowSum = `function maxWindowSum(arr: number[], windowSize: number): number | null {
  // Write your code here
};`;

const handlerMaxWindowSum = (fn: (arr: number[], windowSize: number) => number | null) => {
  try {
    const testCases: [number[], number][] = [
      [[1, 2, 3, 4, 5], 2],
      [[1, -2, 3, 4, -5], 3],
      [[10, 20, 30], 1],
      [[5, 5, 5, 5], 4],
    ];

    const expectedOutputs = [
      9,
      5,
      30,
      20,
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("maxWindowSum handler function error:", error);
    throw new Error(error);
  }
};

export const maxWindowSum: Problem = {
  id: "sliding-window-maximum-sum",
  title: "Sliding Window Maximum Sum",
  problemStatement: `<p class='mt-3'>
    Implement a function <code>maxWindowSum(arr, windowSize)</code> that calculates the maximum sum of any contiguous subarray of the specified size within the array.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[1, 2, 3, 4, 5], 2`,
      outputText: `9`,
      explanation: `The maximum sum of any contiguous subarray of size 2 is 9 (4 + 5).`
    },
    {
      id: 2,
      inputText: `[1, -2, 3, 4, -5], 3`,
      outputText: `5`,
      explanation: `The maximum sum of any contiguous subarray of size 3 is 5 (3 + 4 - 2).`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ arr.length ≤ 10<sup>5</sup></code>
  </li>`,
  handlerFunction: handlerMaxWindowSum,
  starterCode: starterCodeMaxWindowSum,
  order: 5,
  starterFunctionName: "function maxWindowSum("
};