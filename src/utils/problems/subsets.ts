import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSubsets = `function subsets(nums: number[]): number[][] {
  // Write your code here
};`;

const handlerSubsets = (fn: (nums: number[]) => number[][]) => {
  try {
    const testCases = [
      [[1, 2, 3]],
      [[0]],
      [[]],
    ];

    const expectedOutputs = [
      [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
      [[], [0]],
      [[]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Pass the nums array directly
      assert.deepStrictEqual(result.sort(), expectedOutputs[i].sort());
    }
    return true;
  } catch (error: any) {
    console.log("subsets handler function error:", error);
    throw new Error(error);
  }
};

export const subsets: Problem = {
  id: "subsets",
  title: "Subsets",
  problemStatement: `<p class='mt-3'>
    Given an integer array <code>nums</code> of unique elements, return all possible subsets (the power set).
    The solution set must not contain duplicate subsets. Return the solution in any order.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `nums = [1,2,3]`,
      outputText: `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`,
      explanation: `There are 2^3 = 8 subsets in total.`
    },
    {
      id: 2,
      inputText: `nums = [0]`,
      outputText: `[[],[0]]`,
      explanation: `There are 2^1 = 2 subsets in total.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ nums.length ≤ 10</code>
  </li>
  <li class='mt-2'>
    <code>-10 ≤ nums[i] ≤ 10</code>
  </li>
  <li class='mt-2'>
    All the numbers of <code>nums</code> are unique.
  </li>`,
  handlerFunction: handlerSubsets,
  starterCode: starterCodeSubsets,
  order: 1,
  starterFunctionName: "function subsets("
};