import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSelectBySuffix = `function selectBySuffix(wordList: string[], suffix: string): string[] {
  // Write your code here
};`;

const handlerSelectBySuffix = (fn: (wordList: string[], suffix: string) => string[]) => {
  try {
    const testCases: [string[], string][] = [
      [["hello", "world", "bell"], "ell"],
      [["apple", "banana", "grape"], "e"],
      [["cat", "dog"], "z"],
    ];

    const expectedOutputs = [
      ["hello", "bell"],
      ["apple", "grape"],
      [],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("selectBySuffix handler function error:", error);
    throw new Error(error);
  }
};

export const selectBySuffix: Problem = {
  id: "suffix-based-word-selector",
  title: "Suffix-Based Word Selector",
  problemStatement: `<p class='mt-3'>
    Develop a function <code>selectBySuffix(wordList, suffix)</code> that returns words from the list that end with the specified suffix.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["hello", "world", "bell"], "ell"`,
      outputText: `["hello", "bell"]`,
      explanation: `Both "hello" and "bell" end with "ell".`
    },
    {
      id: 2,
      inputText: `["apple", "banana", "grape"], "e"`,
      outputText: `["apple", "grape"]`,
      explanation: `Both "apple" and "grape" end with "e".`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ wordList.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerSelectBySuffix,
  starterCode: starterCodeSelectBySuffix,
  order: 9,
  starterFunctionName: "function selectBySuffix("
};