import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMergeSegments = `function mergeSegments(strings: string[], begin: number, end: number): string {
  // Write your code here
};`;

const handlerMergeSegments = (fn: (strings: string[], begin: number, end: number) => string) => {
  try {
    const testCases: [string[], number, number][] = [
      [["a", "b", "c", "d"], 1, 3],
      [["a", "b", "c", "d"], -1, 2],
      [["a", "b", "c", "d"], 2, 5],
      [["a", "b", "c", "d"], 3, 1],
      [[], 0, 1],
    ];

    const expectedOutputs = [
      "bcd",
      "abc",
      "cd",
      "",
      "",
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]); // Use spread operator to pass arguments
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("mergeSegments handler function error:", error);
    throw new Error(error);
  }
};

export const mergeSegments: Problem = {
  id: "string-segment-merger",
  title: "String Segment Merger",
  problemStatement: `<p class='mt-3'>
    Write a function <code>mergeSegments(strings, begin, end)</code> that takes a list of strings and two indices. It should merge the strings from the <code>begin</code> index to the <code>end</code> index inclusively and return the combined string. If <code>begin</code> is negative, start from the first element. If <code>end</code> is greater than the last index, end with the last element. If <code>begin</code> is greater than <code>end</code>, return an empty string.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["a", "b", "c", "d"], 1, 3`,
      outputText: `"bcd"`,
      explanation: `Merges strings from index 1 to 3: "b", "c", "d".`
    },
    {
      id: 2,
      inputText: `["a", "b", "c", "d"], -1, 2`,
      outputText: `"abc"`,
      explanation: `Merges strings from index 0 to 2: "a", "b", "c".`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ strings.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerMergeSegments,
  starterCode: starterCodeMergeSegments,
  order: 1,
  starterFunctionName: "function mergeSegments("
};