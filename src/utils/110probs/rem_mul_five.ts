import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeRemoveMultiplesOfFive = `function removeMultiplesOfFive(twoDNumbers) {
  // Write your code here
};`;

const handlerRemoveMultiplesOfFive = (fn: any) => {
  try {
    const testCases = [
      [[5, 7, 10], [1, 2, 15]],
      [[], [25, 30], [5, 5, 2]],
      [[1, 3], [2], [11, 12]],
    ];

    const expectedOutputs = [
      [[7], [1, 2]],
      [[], [], [2]],
      [[1, 3], [2], [11, 12]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("removeMultiplesOfFive handler function error:", error);
    throw new Error(error);
  }
};

export const removeMultiplesOfFive: Problem = {
  id: "remove-multiples-of-five",
  title: "Remove Multiples of Five",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>removeMultiplesOfFive</code> that takes a 2D list of integers and removes all multiples of five.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "[[5, 7, 10], [1, 2, 15]]",
      outputText: "[[7], [1, 2]]",
      explanation: "Multiples of 5 (5, 10, 15) are removed."
    },
    {
      id: 2,
      inputText: "[[], [25, 30], [5, 5, 2]]",
      outputText: "[[], [], [2]]",
      explanation: "Multiples of 5 (25, 30, 5, 5) are removed."
    },
    {
      id: 3,
      inputText: "[[1, 3], [2], [11, 12]]",
      outputText: "[[1, 3], [2], [11, 12]]",
      explanation: "No multiples of 5 to remove."
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ twoDNumbers.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerRemoveMultiplesOfFive,
  starterCode: starterCodeRemoveMultiplesOfFive,
  order: 1,
  starterFunctionName: "function removeMultiplesOfFive("
};