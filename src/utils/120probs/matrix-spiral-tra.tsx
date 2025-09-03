import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSpiralOrder = `function spiralOrder(matrix: number[][]): number[] {
  // Write your code here
};`;

const handlerSpiralOrder = (fn: (matrix: number[][]) => number[]) => {
  try {
    const testCases: [number[][]][] = [
      [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
      [[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]],
      [[[1]]],
    ];

    const expectedOutputs = [
      [1, 2, 3, 6, 9, 8, 7, 4, 5],
      [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
      [1],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("spiralOrder handler function error:", error);
    throw new Error(error);
  }
};

export const spiralOrder: Problem = {
  id: "matrix-spiral-traversal",
  title: "Matrix Spiral Traversal",
  problemStatement: `<p class='mt-3'>
    Write a function <code>spiralOrder(matrix)</code> that takes a 2D list and returns all elements of the matrix in spiral order.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`,
      outputText: `[1, 2, 3, 6, 9, 8, 7, 4, 5]`,
      explanation: `The elements are traversed in a spiral order.`
    },
    {
      id: 2,
      inputText: `[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]`,
      outputText: `[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]`,
      explanation: `The elements are traversed in a spiral order.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ matrix.length, matrix[0].length ≤ 100</code>
  </li>`,
  handlerFunction: handlerSpiralOrder,
  starterCode: starterCodeSpiralOrder,
  order: 21,
  starterFunctionName: "function spiralOrder("
};