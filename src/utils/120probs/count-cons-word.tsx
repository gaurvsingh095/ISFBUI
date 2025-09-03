import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeCountConsonants = `function countConsonants(words: string[]): number[] {
  // Write your code here
};`;

const handlerCountConsonants = (fn: (words: string[]) => number[]) => {
  try {
    const testCases: [string[]][] = [
      [["hello", "world"]],
      [["apple", "banana"]],
      [["sky", "fly"]],
    ];

    const expectedOutputs = [
      [3, 4],
      [3, 3],
      [2, 2],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("countConsonants handler function error:", error);
    throw new Error(error);
  }
};

export const countConsonants: Problem = {
  id: "count-consonants-in-words",
  title: "Count Consonants in Words",
  problemStatement: `<p class='mt-3'>
    Write a function <code>countConsonants(words)</code> that takes a list of words and returns a list of integers representing the number of consonants in each word.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["hello", "world"]`,
      outputText: `[3, 4]`,
      explanation: `"hello" has 3 consonants, "world" has 4 consonants.`
    },
    {
      id: 2,
      inputText: `["apple", "banana"]`,
      outputText: `[3, 3]`,
      explanation: `"apple" has 3 consonants, "banana" has 3 consonants.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ words.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerCountConsonants,
  starterCode: starterCodeCountConsonants,
  order: 19,
  starterFunctionName: "function countConsonants("
};