import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeIntervalMerger = `function mergeIntervals(intervals: number[][]): number[][] {
  // Write your code here
};`;

const handlerIntervalMerger = (fn: (intervals: number[][]) => number[][]) => {
  try {
    const testCases: number[][][] = [
      [[1, 3], [2, 6], [8, 10], [15, 18]],
      [[1, 4], [4, 5]]
    ];
    const expectedOutputs: number[][][] = [
      [[1, 6], [8, 10], [15, 18]],
      [[1, 5]]
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("intervalMerger handler function error:", error);
    throw new Error(error);
  }
};

export const intervalMerger: Problem = {
  id: "interval-merger",
  title: "Interval Merger",
  problemStatement: `<p class='mt-3'>
    Write a function <code>mergeIntervals(intervals)</code> that merges all overlapping intervals and returns an array of the non-overlapping intervals that cover all the intervals in the input.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1,3],[2,6],[8,10],[15,18]]`,
      outputText: `[[1,6],[8,10],[15,18]]`,
      explanation: `Intervals [1,3] and [2,6] overlap, so they are merged into [1,6].`
    },
    {
      id: 2,
      inputText: `[[1,4],[4,5]]`,
      outputText: `[[1,5]]`,
      explanation: `Intervals [1,4] and [4,5] overlap, so they are merged into [1,5].`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ intervals.length ≤ 10000</code>
  </li>`,
  handlerFunction: handlerIntervalMerger,
  starterCode: starterCodeIntervalMerger,
  order: 2,
  starterFunctionName: "function mergeIntervals("
};