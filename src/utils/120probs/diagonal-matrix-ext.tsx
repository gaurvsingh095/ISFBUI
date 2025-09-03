import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeExtractDiagonal = `function extractDiagonal(matrix: number[][]): number[] {
  // Write your code here
};`;

const handlerExtractDiagonal = (fn: (matrix: number[][]) => number[]) => {
  try {
    const testCases: [number[][]][] = [
      [[[1, 2], [3, 4]]],
      [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]],
      [[[5]]],
    ];

    const expectedOutputs = [
      [1, 4],
      [1, 1, 1],
      [5],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("extractDiagonal handler function error:", error);
    throw new Error(error);
  }
};

export const extractDiagonal: Problem = {
  id: "diagonal-matrix-extractor",
  title: "Diagonal Matrix Extractor",
  problemStatement: `<p class='mt-3'>
    Create a function <code>extractDiagonal(matrix)</code> that takes a square 2D list and returns a list containing the diagonal elements from top-left to bottom-right.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1, 2], [3, 4]]`,
      outputText: `[1, 4]`,
      explanation: `Extracts the diagonal elements [1, 4].`
    },
    {
      id: 2,
      inputText: `[[1, 0, 0], [0, 1, 0], [0, 0, 1]]`,
      outputText: `[1, 1, 1]`,
      explanation: `Extracts the diagonal elements [1, 1, 1].`
    }
  ],
  constraints: `<li class='mt-2'>
    The matrix is square (same number of rows and columns).
  </li>`,
  handlerFunction: handlerExtractDiagonal,
  starterCode: starterCodeExtractDiagonal,
  order: 12,
  starterFunctionName: "function extractDiagonal("
};