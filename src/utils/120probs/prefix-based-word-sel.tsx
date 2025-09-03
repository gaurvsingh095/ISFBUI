import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSelectByPrefix = `function selectByPrefix(wordList: string[], prefix: string): string[] {
  // Write your code here
};`;

const handlerSelectByPrefix = (fn: (wordList: string[], prefix: string) => string[]) => {
  try {
    const testCases: [string[], string][] = [
      [["hello", "world", "hi"], "h"],
      [["apple", "banana", "apricot"], "ap"],
      [["cat", "dog"], "z"],
    ];

    const expectedOutputs = [
      ["hello", "hi"],
      ["apple", "apricot"],
      [],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("selectByPrefix handler function error:", error);
    throw new Error(error);
  }
};

export const selectByPrefix: Problem = {
  id: "prefix-based-word-selector",
  title: "Prefix-Based Word Selector",
  problemStatement: `<p class='mt-3'>
    Develop a function <code>selectByPrefix(wordList, prefix)</code> that returns words from the list that start with the specified prefix.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["hello", "world", "hi"], "h"`,
      outputText: `["hello", "hi"]`,
      explanation: `Both "hello" and "hi" start with "h".`
    },
    {
      id: 2,
      inputText: `["apple", "banana", "apricot"], "ap"`,
      outputText: `["apple", "apricot"]`,
      explanation: `Both "apple" and "apricot" start with "ap".`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ wordList.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerSelectByPrefix,
  starterCode: starterCodeSelectByPrefix,
  order: 14,
  starterFunctionName: "function selectByPrefix("
};