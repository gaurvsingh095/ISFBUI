import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeExtractRow = `function extractRow(matrix: number[][], rowNum: number): number[] {
  // Write your code here
};`;

const handlerExtractRow = (fn: (matrix: number[][], rowNum: number) => number[]) => {
  try {
    const testCases: [number[][], number][] = [
      [[[1, 2], [3, 4], [5, 6]], 1],
      [[[1, 2, 3], [4, 5, 6]], 0],
      [[[7, 8], [9, 10]], 1],
    ];

    const expectedOutputs = [
      [3, 4],
      [1, 2, 3],
      [9, 10],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]); // Use spread operator to pass arguments
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("extractRow handler function error:", error);
    throw new Error(error);
  }
};

export const extractRow: Problem = {
  id: "matrix-row-extractor",
  title: "Matrix Row Extractor",
  problemStatement: `<p class='mt-3'>
    Create a function <code>extractRow(matrix, rowNum)</code> that takes a 2D list and returns the specified row as a new list. Assume the row number is always valid.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1, 2], [3, 4], [5, 6]], 1`,
      outputText: `[3, 4]`,
      explanation: `Returns the second row of the matrix.`
    },
    {
      id: 2,
      inputText: `[[1, 2, 3], [4, 5, 6]], 0`,
      outputText: `[1, 2, 3]`,
      explanation: `Returns the first row of the matrix.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ matrix.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerExtractRow,
  starterCode: starterCodeExtractRow,
  order: 2,
  starterFunctionName: "function extractRow("
};