import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeCountVowels = `function countVowels(words: string[]): number[] {
  // Write your code here
};`;

const handlerCountVowels = (fn: (words: string[]) => number[]) => {
  try {
    const testCases: [string[]][] = [
      [["hello", "world"]],
      [["apple", "banana"]],
      [["sky", "fly"]],
    ];

    const expectedOutputs = [
      [2, 1],
      [2, 3],
      [0, 0],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("countVowels handler function error:", error);
    throw new Error(error);
  }
};

export const countVowels: Problem = {
  id: "count-vowels-in-words",
  title: "Count Vowels in Words",
  problemStatement: `<p class='mt-3'>
    Write a function <code>countVowels(words)</code> that takes a list of words and returns a list of integers representing the number of vowels in each word.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["hello", "world"]`,
      outputText: `[2, 1]`,
      explanation: `"hello" has 2 vowels, "world" has 1 vowel.`
    },
    {
      id: 2,
      inputText: `["apple", "banana"]`,
      outputText: `[2, 3]`,
      explanation: `"apple" has 2 vowels, "banana" has 3 vowels.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ words.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerCountVowels,
  starterCode: starterCodeCountVowels,
  order: 15,
  starterFunctionName: "function countVowels("
};