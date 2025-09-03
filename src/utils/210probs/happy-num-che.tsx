import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeHappyNumberChecker = `function isHappyNumber(n: number): boolean {
  // Write your code here
};`;

const handlerHappyNumberChecker = (fn: (n: number) => boolean) => {
  try {
    const testCases: number[] = [19, 2, 7, 20];
    const expectedOutputs: boolean[] = [true, false, true, false];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("happyNumberChecker handler function error:", error);
    throw new Error(error);
  }
};

export const happyNumberChecker: Problem = {
  id: "happy-number-checker",
  title: "Happy Number Checker",
  problemStatement: `<p class='mt-3'>
    Write a function <code>isHappyNumber(n)</code> that returns true if <code>n</code> is a happy number, false otherwise. A happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `19`,
      outputText: `true`,
      explanation: `19 is a happy number because 1^2 + 9^2 = 82, 8^2 + 2^2 = 68, 6^2 + 8^2 = 100, 1^2 + 0^2 + 0^2 = 1.`
    },
    {
      id: 2,
      inputText: `2`,
      outputText: `false`,
      explanation: `2 is not a happy number because it does not reach 1.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ n ≤ 1000</code>
  </li>`,
  handlerFunction: handlerHappyNumberChecker,
  starterCode: starterCodeHappyNumberChecker,
  order: 2,
  starterFunctionName: "function isHappyNumber("
};