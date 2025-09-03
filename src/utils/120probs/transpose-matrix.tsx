import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeTransposeMatrix = `function transposeMatrix(matrix: number[][]): number[][] {
  // Write your code here
};`;

const handlerTransposeMatrix = (fn: (matrix: number[][]) => number[][]) => {
  try {
    const testCases: [number[][]][] = [
      [[[1, 2], [3, 4]]],
      [[[1, 2, 3], [4, 5, 6]]],
      [[[1]]],
    ];

    const expectedOutputs = [
      [[1, 3], [2, 4]],
      [[1, 4], [2, 5], [3, 6]],
      [[1]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("transposeMatrix handler function error:", error);
    throw new Error(error);
  }
};

export const transposeMatrix: Problem = {
  id: "transpose-matrix",
  title: "Transpose Matrix",
  problemStatement: `<p class='mt-3'>
    Write a function <code>transposeMatrix(matrix)</code> that takes a 2D list and returns its transpose.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1, 2], [3, 4]]`,
      outputText: `[[1, 3], [2, 4]]`,
      explanation: `The transpose of the matrix is [[1, 3], [2, 4]].`
    },
    {
      id: 2,
      inputText: `[[1, 2, 3], [4, 5, 6]]`,
      outputText: `[[1, 4], [2, 5], [3, 6]]`,
      explanation: `The transpose of the matrix is [[1, 4], [2, 5], [3, 6]].`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ matrix.length, matrix[0].length ≤ 100</code>
  </li>`,
  handlerFunction: handlerTransposeMatrix,
  starterCode: starterCodeTransposeMatrix,
  order: 13,
  starterFunctionName: "function transposeMatrix("
};