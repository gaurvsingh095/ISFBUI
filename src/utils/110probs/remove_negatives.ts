import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeRemoveNegatives = `function removeNegatives(nums) {
  // Write your code here
};`;

const handlerRemoveNegatives = (fn: any) => {
  try {
    const testCases = [
      [1, -2, 3, -4, 5],
      [0, -1, -5, 6],
      [],
      [-10, -20, 30, 40],
      [5, -5, 10, -10],
    ];

    const expectedOutputs = [
      [1, 3, 5],
      [0, 6],
      [],
      [30, 40],
      [5, 10],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("removeNegatives handler function error:", error);
    throw new Error(error);
  }
};

export const removeNegatives: Problem = {
  id: "remove-negatives",
  title: "Remove Negative Numbers",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>removeNegatives</code> that removes all negative values from the list in-place.
    Returns the list after modification.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[1, -2, 3, -4, 5]`,
      outputText: `[1, 3, 5]`,
      explanation: `"1, -2, 3, -4, 5" → Remove negative values → [1, 3, 5]`
    },
    {
      id: 2,
      inputText: `[0, -1, -5, 6]`,
      outputText: `[0, 6]`,
      explanation: `"0, -1, -5, 6" → Remove negative values → [0, 6]`
    },
    {
      id: 3,
      inputText: `[]`,
      outputText: `[]`,
      explanation: `Empty list, so nothing to remove`
    },
    {
      id: 4,
      inputText: `[-10, -20, 30, 40]`,
      outputText: `[30, 40]`,
      explanation: `"Remove negative values → [30, 40]"`
    },
    {
      id: 5,
      inputText: `[5, -5, 10, -10]`,
      outputText: `[5, 10]`,
      explanation: `"Remove negative values → [5, 10]"`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ nums.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerRemoveNegatives,
  starterCode: starterCodeRemoveNegatives,
  order: 4,
  starterFunctionName: "function removeNegatives("
};