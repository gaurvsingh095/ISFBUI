import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeAnagramChecker = `function isAnagram(s1: string, s2: string): boolean {
  // Write your code here
};`;

const handlerAnagramChecker = (fn: (s1: string, s2: string) => boolean) => {
  try {
    const testCases: [string, string][] = [
      ["listen", "silent"],
      ["triangle", "integral"],
      ["apple", "pale"]
    ];
    const expectedOutputs: boolean[] = [true, true, false];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("anagramChecker handler function error:", error);
    throw new Error(error);
  }
};

export const anagramChecker: Problem = {
  id: "anagram-checker",
  title: "Anagram Checker",
  problemStatement: `<p class='mt-3'>
    Write a function <code>isAnagram(s1, s2)</code> that returns true if <code>s1</code> and <code>s2</code> are anagrams of each other, false otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"listen", "silent"`,
      outputText: `true`,
      explanation: `"listen" and "silent" are anagrams.`
    },
    {
      id: 2,
      inputText: `"apple", "pale"`,
      outputText: `false`,
      explanation: `"apple" and "pale" are not anagrams.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ s1.length, s2.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerAnagramChecker,
  starterCode: starterCodeAnagramChecker,
  order: 1,
  starterFunctionName: "function isAnagram("
};