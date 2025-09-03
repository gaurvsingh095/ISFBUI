import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeIsSquareMatrix = `function isSquareMatrix(matrix: number[][]): boolean {
  // Write your code here
};`;

const handlerIsSquareMatrix = (fn: (matrix: number[][]) => boolean) => {
  try {
    const testCases = [
      [[[1, 2], [3, 4]]],
      [[[1, 2, 3], [4, 5, 6]]],
      [[[1]]],
      [[]],
    ];

    const expectedOutputs = [
      true,
      false,
      true,
      true,
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("isSquareMatrix handler function error:", error);
    throw new Error(error);
  }
};

export const isSquareMatrix: Problem = {
  id: "square-matrix-validator",
  title: "Square Matrix Validator",
  problemStatement: `<p class='mt-3'>
    Write a function <code>isSquareMatrix(matrix)</code> that checks if a given 2D list is a square matrix, meaning it has the same number of rows and columns.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1, 2], [3, 4]]`,
      outputText: `true`,
      explanation: `The matrix is 2x2, which is square.`
    },
    {
      id: 2,
      inputText: `[[1, 2, 3], [4, 5, 6]]`,
      outputText: `false`,
      explanation: `The matrix is 2x3, which is not square.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ matrix.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerIsSquareMatrix,
  starterCode: starterCodeIsSquareMatrix,
  order: 3,
  starterFunctionName: "function isSquareMatrix("
};