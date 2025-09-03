import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeLongestConsecutive = `function longestConsecutive(nums: number[]): number {
  // Write your code here
};`;

const handlerLongestConsecutive = (fn: (nums: number[]) => number) => {
  try {
    const testCases: [number[]][] = [
      [[100, 4, 200, 1, 3, 2]],
      [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]],
      [[]],
    ];

    const expectedOutputs = [
      4,
      9,
      0,
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("longestConsecutive handler function error:", error);
    throw new Error(error);
  }
};

export const longestConsecutive: Problem = {
  id: "longest-consecutive-sequence",
  title: "Longest Consecutive Sequence",
  problemStatement: `<p class='mt-3'>
    Write a function <code>longestConsecutive(nums)</code> that takes an unsorted array of integers and returns the length of the longest consecutive elements sequence.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[100, 4, 200, 1, 3, 2]`,
      outputText: `4`,
      explanation: `The longest consecutive sequence is [1, 2, 3, 4].`
    },
    {
      id: 2,
      inputText: `[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]`,
      outputText: `9`,
      explanation: `The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8].`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ nums.length ≤ 10<sup>5</sup></code>
  </li>`,
  handlerFunction: handlerLongestConsecutive,
  starterCode: starterCodeLongestConsecutive,
  order: 22,
  starterFunctionName: "function longestConsecutive("
};