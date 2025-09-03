import assert from "assert";
import { Problem } from "../types/problem";

const starterCodePascalsTriangleRow = `function generatePascalsTriangleRow(rowIndex: number): number[] {
  // Write your code here
};`;

const handlerPascalsTriangleRow = (fn: (rowIndex: number) => number[]) => {
  try {
    const testCases: number[] = [0, 1, 4];
    const expectedOutputs: number[][] = [
      [1],
      [1, 1],
      [1, 4, 6, 4, 1]
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("pascalsTriangleRow handler function error:", error);
    throw new Error(error);
  }
};

export const pascalsTriangleRow: Problem = {
  id: "pascals-triangle-row",
  title: "Pascal's Triangle Row Generator",
  problemStatement: `<p class='mt-3'>
    Write a function <code>generatePascalsTriangleRow(rowIndex)</code> that returns the <code>rowIndex</code>th row of Pascal's Triangle.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `0`,
      outputText: `[1]`,
      explanation: `The 0th row of Pascal's Triangle is [1].`
    },
    {
      id: 2,
      inputText: `4`,
      outputText: `[1, 4, 6, 4, 1]`,
      explanation: `The 4th row of Pascal's Triangle is [1, 4, 6, 4, 1].`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ rowIndex ≤ 30</code>
  </li>`,
  handlerFunction: handlerPascalsTriangleRow,
  starterCode: starterCodePascalsTriangleRow,
  order: 3,
  starterFunctionName: "function generatePascalsTriangleRow("
};