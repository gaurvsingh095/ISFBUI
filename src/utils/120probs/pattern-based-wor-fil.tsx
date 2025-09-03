import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeFilterByPattern = `function filterByPattern(words: string[], pattern: string): string[] {
  // Write your code here
};`;

const handlerFilterByPattern = (fn: (words: string[], pattern: string) => string[]) => {
  try {
    const testCases: [string[], string][] = [
      [["cat", "dog", "bat"], "xyx"],
      [["apple", "orange", "grape"], "yxy"],
      [["sky", "fly"], "xy"],
    ];

    const expectedOutputs = [
      ["cat", "bat"],
      ["apple"],
      ["fly"],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]); // Use spread operator to pass arguments
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("filterByPattern handler function error:", error);
    throw new Error(error);
  }
};

export const filterByPattern: Problem = {
  id: "pattern-based-word-filter",
  title: "Pattern-Based Word Filter",
  problemStatement: `<p class='mt-3'>
    Develop a function <code>filterByPattern(words, pattern)</code> where <code>pattern</code> is a string of 'x's and 'y's. The function should return words from the list that match the pattern structure, considering 'x' as consonants and 'y' as vowels.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["cat", "dog", "bat"], "xyx"`,
      outputText: `["cat", "bat"]`,
      explanation: `Both "cat" and "bat" match the pattern 'xyx'.`
    },
    {
      id: 2,
      inputText: `["apple", "orange", "grape"], "yxy"`,
      outputText: `["apple"]`,
      explanation: `"apple" matches the pattern 'yxy'.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ words.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerFilterByPattern,
  starterCode: starterCodeFilterByPattern,
  order: 4,
  starterFunctionName: "function filterByPattern("
};