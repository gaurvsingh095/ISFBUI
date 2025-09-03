import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeReverseSegments = `function reverseSegments(strings: string[], start: number, end: number): string[] {
  // Write your code here
};`;

const handlerReverseSegments = (fn: (strings: string[], start: number, end: number) => string[]) => {
  try {
    const testCases: [string[], number, number][] = [
      [["a", "b", "c", "d"], 1, 3],
      [["a", "b", "c", "d"], -1, 2],
      [["a", "b", "c", "d"], 2, 5],
      [["a", "b", "c", "d"], 3, 1],
      [[], 0, 1],
    ];

    const expectedOutputs = [
      ["a", "d", "c", "b"],
      ["c", "b", "a", "d"],
      ["a", "b", "d", "c"],
      ["a", "b", "c", "d"],
      [],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("reverseSegments handler function error:", error);
    throw new Error(error);
  }
};

export const reverseSegments: Problem = {
  id: "reverse-string-segments",
  title: "Reverse String Segments",
  problemStatement: `<p class='mt-3'>
    Write a function <code>reverseSegments(strings, start, end)</code> that takes a list of strings and two indices. It should reverse the order of strings from the <code>start</code> index to the <code>end</code> index inclusively and return the modified list. Handle cases where indices are out of bounds by adjusting them to valid positions.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["a", "b", "c", "d"], 1, 3`,
      outputText: `["a", "d", "c", "b"]`,
      explanation: `Reverses the segment from index 1 to 3.`
    },
    {
      id: 2,
      inputText: `["a", "b", "c", "d"], -1, 2`,
      outputText: `["c", "b", "a", "d"]`,
      explanation: `Reverses the segment from index 0 to 2.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ strings.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerReverseSegments,
  starterCode: starterCodeReverseSegments,
  order: 11,
  starterFunctionName: "function reverseSegments("
};