import assert from "assert";
import { Problem } from "../types/problem";

const starterCodePerfectNumberChecker = `function isPerfectNumber(n: number): boolean {
  // Write your code here
};`;

const handlerPerfectNumberChecker = (fn: (n: number) => boolean) => {
  try {
    const testCases: number[] = [6, 28, 12, 496];
    const expectedOutputs: boolean[] = [true, true, false, true];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("perfectNumberChecker handler function error:", error);
    throw new Error(error);
  }
};

export const perfectNumberChecker: Problem = {
  id: "perfect-number-checker",
  title: "Perfect Number Checker",
  problemStatement: `<p class='mt-3'>
    Write a function <code>isPerfectNumber(n)</code> that returns true if <code>n</code> is a perfect number, false otherwise. A perfect number is a positive integer that is equal to the sum of its proper positive divisors, excluding the number itself.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `6`,
      outputText: `true`,
      explanation: `6 is a perfect number because 1 + 2 + 3 = 6.`
    },
    {
      id: 2,
      inputText: `12`,
      outputText: `false`,
      explanation: `12 is not a perfect number because 1 + 2 + 3 + 4 + 6 = 16.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ n ≤ 1000</code>
  </li>`,
  handlerFunction: handlerPerfectNumberChecker,
  starterCode: starterCodePerfectNumberChecker,
  order: 2,
  starterFunctionName: "function isPerfectNumber("
};