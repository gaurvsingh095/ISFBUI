import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeGenerateFibonacci = `function generateFibonacci(n: number): number[] {
  // Write your code here
};`;

const handlerGenerateFibonacci = (fn: (n: number) => number[]) => {
  try {
    const testCases: [number][] = [
      [5],
      [1],
      [0],
    ];

    const expectedOutputs = [
      [0, 1, 1, 2, 3],
      [0],
      [],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("generateFibonacci handler function error:", error);
    throw new Error(error);
  }
};

export const generateFibonacci: Problem = {
  id: "generate-fibonacci-sequence",
  title: "Generate Fibonacci Sequence",
  problemStatement: `<p class='mt-3'>
    Create a function <code>generateFibonacci(n)</code> that returns a list containing the first <code>n</code> numbers of the Fibonacci sequence.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `5`,
      outputText: `[0, 1, 1, 2, 3]`,
      explanation: `The first 5 numbers of the Fibonacci sequence are [0, 1, 1, 2, 3].`
    },
    {
      id: 2,
      inputText: `1`,
      outputText: `[0]`,
      explanation: `The first number of the Fibonacci sequence is [0].`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ n ≤ 100</code>
  </li>`,
  handlerFunction: handlerGenerateFibonacci,
  starterCode: starterCodeGenerateFibonacci,
  order: 20,
  starterFunctionName: "function generateFibonacci("
};