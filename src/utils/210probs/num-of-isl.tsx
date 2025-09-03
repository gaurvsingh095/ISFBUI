import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeNumIslands = `function numIslands(grid: string[][]): number {
  // Write your code here
};`;

const handlerNumIslands = (fn: (grid: string[][]) => number) => {
  try {
    const testCases: [string[][]][] = [
      [[["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]],
      [[["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]],
      [[["1", "0", "1", "0", "1"], ["0", "1", "0", "1", "0"], ["1", "0", "1", "0", "1"], ["0", "1", "0", "1", "0"]]],
      [[["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]]],
    ];

    const expectedOutputs = [1, 3, 9, 1];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("numIslands handler function error:", error);
    throw new Error(error);
  }
};

export const numIslands: Problem = {
  id: "number-of-islands",
  title: "Number of Islands",
  problemStatement: `<p class='mt-3'>
    Develop a function <code>numIslands(grid)</code> that returns the number of islands in a 2D binary grid.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]`,
      outputText: `1`,
      explanation: `There is one large island.`,
    },
    {
      id: 2,
      inputText: `grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]`,
      outputText: `3`,
      explanation: `There are three separate islands.`,
    },
    {
      id: 3,
      inputText: `grid = [
  ["1", "0", "1", "0", "1"],
  ["0", "1", "0", "1", "0"],
  ["1", "0", "1", "0", "1"],
  ["0", "1", "0", "1", "0"]
]`,
      outputText: `9`,
      explanation: `There are nine separate islands.`,
    },
    {
      id: 4,
      inputText: `grid = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"]
]`,
      outputText: `1`,
      explanation: `There is one large island.`,
    },
  ],
  constraints: `<li class='mt-2'> <code>1 ≤ m, n ≤ 300</code> </li>`,
  handlerFunction: handlerNumIslands,
  starterCode: starterCodeNumIslands,
  order: 2,
  starterFunctionName: "function numIslands(",
};