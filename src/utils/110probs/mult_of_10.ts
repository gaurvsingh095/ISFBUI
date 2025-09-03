import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMakeMultiplesOf10 = `function makeMultiplesOf10(listsOfIntegers) {
  // Write your code here
};`;

const handlerMakeMultiplesOf10 = (fn: any) => {
  try {
    const testCases = [
      [[14, 15, 16], [-14, -15, -16]],
      [[0, 1, 5, 9], [10, 12, 18]],
      [[25], [-5, -4]],
    ];

    const expectedOutputs = [
      [[10, 20, 20], [-10, -10, -20]],
      [[0, 0, 10, 10], [10, 10, 20]],
      [[30], [0, 0]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("makeMultiplesOf10 handler function error:", error);
    throw new Error(error);
  }
};

export const makeMultiplesOf10: Problem = {
  id: "make-multiples-of-10",
  title: "Make Multiples of 10",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>makeMultiplesOf10</code> that updates every integer in each sublist to the nearest multiple of 10.
    If the number is in the middle (e.g., 5), round up.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[14, 15, 16], [-14, -15, -16]]`,
      outputText: `[[10, 20, 20], [-10, -10, -20]]`,
      explanation: `"14 -> 10", "15 -> 20", "16 -> 20", "-14 -> -10", "-15 -> -10", "-16 -> -20"`
    },
    {
      id: 2,
      inputText: `[[0, 1, 5, 9], [10, 12, 18]]`,
      outputText: `[[0, 0, 10, 10], [10, 10, 20]]`,
      explanation: `"0 -> 0", "1 -> 0", "5 -> 10", "9 -> 10", "10 -> 10", "12 -> 10", "18 -> 20"`
    },
    {
      id: 3,
      inputText: `[[25], [-5, -4]]`,
      outputText: `[[30], [0, 0]]`,
      explanation: `"25 -> 30", "-5 -> 0", "-4 -> 0"`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ listsOfIntegers.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerMakeMultiplesOf10,
  starterCode: starterCodeMakeMultiplesOf10,
  order: 8,
  starterFunctionName: "function makeMultiplesOf10("
};