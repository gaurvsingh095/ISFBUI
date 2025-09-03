import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMergeIntervals = `function mergeIntervals(intervals) {
  // Write your code here
};`;

const handlerMergeIntervals = (fn: any) => {
  try {
    const testCases = [
      [[[1, 3], [2, 6], [8, 10], [15, 18]]],
      [[[1, 4], [4, 5]]],
      [[[1, 4], [2, 3]]],
      [[[1, 4], [0, 4]]],
      [[[1, 4], [0, 1], [3, 5]]],
    ];

    const expectedOutputs = [
      [[1, 6], [8, 10], [15, 18]],
      [[1, 5]],
      [[1, 4]],
      [[0, 4]],
      [[0, 5]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Pass the array of intervals directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("mergeIntervals handler function error:", error);
    throw new Error(error);
  }
};

export const mergeIntervals: Problem = {
  id: "merge-intervals",
  title: "Merge Intervals",
  problemStatement: `<p class='mt-3'>
    Given an array of intervals where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1, 3], [2, 6], [8, 10], [15, 18]]`,
      outputText: `[[1, 6], [8, 10], [15, 18]]`,
      explanation: `Intervals [1, 3] and [2, 6] overlap, so they are merged into [1, 6].`
    },
    {
      id: 2,
      inputText: `[[1, 4], [4, 5]]`,
      outputText: `[[1, 5]]`,
      explanation: `Intervals [1, 4] and [4, 5] overlap, so they are merged into [1, 5].`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ intervals.length ≤ 10<sup>4</sup></code>
  </li>
  <li class='mt-2'>
    <code>intervals[i].length == 2</code>
  </li>
  <li class='mt-2'>
    <code>0 ≤ start<sub>i</sub> ≤ end<sub>i</sub> ≤ 10<sup>4</sup></code>
  </li>`,
  handlerFunction: handlerMergeIntervals,
  starterCode: starterCodeMergeIntervals,
  order: 1,
  starterFunctionName: "function mergeIntervals("
};