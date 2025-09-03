import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSumCommaSeparated = `function sumCommaSeparated(numbers: string): number {
  // Write your code here
};`;

const handlerSumCommaSeparated = (fn: (numbers: string) => number) => {
  try {
    const testCases: [string][] = [
      ["1,2,3,4"],
      ["10,20,30"],
      ["5"],
      [""],
    ];

    const expectedOutputs = [
      10,
      60,
      5,
      0,
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("sumCommaSeparated handler function error:", error);
    throw new Error(error);
  }
};

export const sumCommaSeparated: Problem = {
  id: "comma-separated-sum",
  title: "Comma-Separated Sum",
  problemStatement: `<p class='mt-3'>
    Write a function <code>sumCommaSeparated(numbers)</code> that takes a string of comma-separated numbers and returns their total sum.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"1,2,3,4"`,
      outputText: `10`,
      explanation: `The sum of the numbers is 10.`
    },
    {
      id: 2,
      inputText: `"10,20,30"`,
      outputText: `60`,
      explanation: `The sum of the numbers is 60.`
    }
  ],
  constraints: `<li class='mt-2'>
    The input string is a valid comma-separated list of integers.
  </li>`,
  handlerFunction: handlerSumCommaSeparated,
  starterCode: starterCodeSumCommaSeparated,
  order: 6,
  starterFunctionName: "function sumCommaSeparated("
};