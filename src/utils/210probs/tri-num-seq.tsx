import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeTriangularNumberSequence = `function generateTriangularNumbers(n: number): number[] {
  // Write your code here
};`;

const handlerTriangularNumberSequence = (fn: (n: number) => number[]) => {
  try {
    const testCases: number[] = [5, 7, 3];
    const expectedOutputs: number[][] = [
      [1, 3, 6, 10, 15],
      [1, 3, 6, 10, 15, 21, 28],
      [1, 3, 6]
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("triangularNumberSequence handler function error:", error);
    throw new Error(error);
  }
};

export const triangularNumberSequence: Problem = {
  id: "triangular-number-sequence",
  title: "Triangular Number Sequence",
  problemStatement: `<p class='mt-3'>
    Write a function <code>generateTriangularNumbers(n)</code> that returns an array of the first <code>n</code> triangular numbers. A triangular number is a number that can form an equilateral triangle.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `5`,
      outputText: `[1, 3, 6, 10, 15]`,
      explanation: `The first 5 triangular numbers are 1, 3, 6, 10, and 15.`
    },
    {
      id: 2,
      inputText: `3`,
      outputText: `[1, 3, 6]`,
      explanation: `The first 3 triangular numbers are 1, 3, and 6.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ n ≤ 50</code>
  </li>`,
  handlerFunction: handlerTriangularNumberSequence,
  starterCode: starterCodeTriangularNumberSequence,
  order: 3,
  starterFunctionName: "function generateTriangularNumbers("
};

// Sample implementation for testing purposes
function generateTriangularNumbers(n: number): number[] {
  const triangularNumbers: number[] = [];
  for (let i = 1; i <= n; i++) {
    const triangularNumber = (i * (i + 1)) / 2;
    triangularNumbers.push(triangularNumber);
  }
  return triangularNumbers;
}

// Test the handler with the sample implementation
handlerTriangularNumberSequence(generateTriangularNumbers);