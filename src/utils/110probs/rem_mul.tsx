import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeRemoveMultiples = `function removeMultiples(twoDList, num) {
  // Write your code here
};`;

const handlerRemoveMultiples = (fn: any) => {
  try {
    const testCases = [
      [[[2, 4, 6], [8, 10]], 2],
      [[[3, 9, 12], [15, 5], [7, 14]], 3],
      [[[], [2, 3, 4]], 2],
    ];

    const expectedOutputs = [
      [[], []],
      [[], [5], [7, 14]],
      [[], [3]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0], testCases[i][1]); // Pass the 2D list and the number
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("removeMultiples handler function error:", error);
    throw new Error(error);
  }
};

export const removeMultiples: Problem = {
  id: "remove-multiples",
  title: "Remove Multiples of a Given Integer",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>removeMultiples</code> that takes a 2D list of integers and removes all multiples of a given number.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "[[2, 4, 6], [8, 10]], num = 2",
      outputText: "[[], []]",
      explanation: "Multiples of 2 (2, 4, 6, 8, 10) are removed."
    },
    {
      id: 2,
      inputText: "[[3, 9, 12], [15, 5], [7, 14]], num = 3",
      outputText: "[[], [5], [7, 14]]",
      explanation: "Multiples of 3 (3, 9, 12, 15) are removed."
    },
    {
      id: 3,
      inputText: "[[], [2, 3, 4]], num = 2",
      outputText: "[[], [3]]",
      explanation: "Multiples of 2 (2, 4) are removed."
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ twoDList.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerRemoveMultiples,
  starterCode: starterCodeRemoveMultiples,
  order: 1,
  starterFunctionName: "function removeMultiples("
};