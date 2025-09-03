import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeFindLongestWord = `function findLongestWord(words: string[]): string {
  // Write your code here
};`;

const handlerFindLongestWord = (fn: (words: string[]) => string) => {
  try {
    const testCases: [string[]][] = [
      [["hello", "world", "hi"]],
      [["apple", "banana", "apricot"]],
      [["cat", "dog"]],
    ];

    const expectedOutputs = [
      "hello",
      "banana",
      "cat",
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("findLongestWord handler function error:", error);
    throw new Error(error);
  }
};

export const findLongestWord: Problem = {
  id: "find-longest-word",
  title: "Find Longest Word",
  problemStatement: `<p class='mt-3'>
    Develop a function <code>findLongestWord(words)</code> that returns the longest word in a list of words. If there are multiple words of the same maximum length, return the first one.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["hello", "world", "hi"]`,
      outputText: `"hello"`,
      explanation: `"hello" is the longest word.`
    },
    {
      id: 2,
      inputText: `["apple", "banana", "apricot"]`,
      outputText: `"banana"`,
      explanation: `"banana" is the longest word.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ words.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerFindLongestWord,
  starterCode: starterCodeFindLongestWord,
  order: 18,
  starterFunctionName: "function findLongestWord("
};