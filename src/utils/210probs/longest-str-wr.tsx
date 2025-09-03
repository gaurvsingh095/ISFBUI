import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeLongestSubstring = `function lengthOfLongestSubstring(s: string): number {
  // Write your code here
};`;

const handlerLongestSubstring = (fn: (s: string) => number) => {
  try {
    const testCases: string[] = ["abcabcbb", "bbbbb", "pwwkew", ""];
    const expectedOutputs: number[] = [3, 1, 3, 0];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("longestSubstring handler function error:", error);
    throw new Error(error);
  }
};

export const longestSubstring: Problem = {
  id: "longest-substring-without-repeating",
  title: "Longest Substring Without Repeating Characters",
  problemStatement: `<p class='mt-3'>
    Write a function <code>lengthOfLongestSubstring(s)</code> that returns the length of the longest substring without repeating characters.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"abcabcbb"`,
      outputText: `3`,
      explanation: `The answer is "abc", with the length of 3.`
    },
    {
      id: 2,
      inputText: `"bbbbb"`,
      outputText: `1`,
      explanation: `The answer is "b", with the length of 1.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ s.length ≤ 500</code>
  </li>`,
  handlerFunction: handlerLongestSubstring,
  starterCode: starterCodeLongestSubstring,
  order: 1,
  starterFunctionName: "function lengthOfLongestSubstring("
};