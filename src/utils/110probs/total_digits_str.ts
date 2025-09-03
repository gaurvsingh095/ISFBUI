import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeTotalDigitsInStrings = `function totalDigitsInStrings(strings) {
  // Write your code here
};`;

const handlerTotalDigitsInStrings = (fn: any) => {
  try {
    const testCases = [
      [["a3", "b12"]],
      [["abc", "xyz"]],
      [["10", "10", "xyz9"]],
    ];

    const expectedOutputs = [
      6,
      0,
      20,
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Pass the array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("totalDigitsInStrings handler function error:", error);
    throw new Error(error);
  }
};

export const totalDigitsInStrings: Problem = {
  id: "total-digits-in-strings",
  title: "Sum of Digits in a List of Strings",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>totalDigitsInStrings</code> that calculates the sum of all digits (0-9) found in each string within the list.
    Returns the integer sum of those digits.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["a3", "b12"]`,
      outputText: `6`,
      explanation: `"a3" → 3, "b12" → 1 + 2, total = 3 + 1 + 2 = 6`
    },
    {
      id: 2,
      inputText: `["abc", "xyz"]`,
      outputText: `0`,
      explanation: `No digits, so the sum is 0`
    },
    {
      id: 3,
      inputText: `["10", "10", "xyz9"]`,
      outputText: `20`,
      explanation: `(1 + 0) + (1 + 0) + 9 = 20`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ strings.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerTotalDigitsInStrings,
  starterCode: starterCodeTotalDigitsInStrings,
  order: 3,
  starterFunctionName: "function totalDigitsInStrings("
};