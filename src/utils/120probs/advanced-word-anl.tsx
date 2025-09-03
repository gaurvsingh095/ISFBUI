import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeAdvancedWordAnalysis = `function advancedWordAnalysis(words: string[], increment: number, n: number): { longestWord: string, consonantCounts: number[], fibonacciSequence: number[] } {
  // Write your code here
};`;

const handlerAdvancedWordAnalysis = (fn: (words: string[], increment: number, n: number) => { longestWord: string, consonantCounts: number[], fibonacciSequence: number[] }) => {
  try {
    const testCases: [string[], number, number][] = [
      [["hello", "world", "hi"], 2, 5],
      [["apple", "banana"], 1, 3],
      [["sky", "fly"], 0, 0],
    ];

    const expectedOutputs = [
      { longestWord: "hello", consonantCounts: [5, 6, 4], fibonacciSequence: [0, 1, 1, 2, 3] },
      { longestWord: "banana", consonantCounts: [4, 4], fibonacciSequence: [0, 1, 1] },
      { longestWord: "sky", consonantCounts: [2, 2], fibonacciSequence: [] },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("advancedWordAnalysis handler function error:", error);
    throw new Error(error);
  }
};

export const advancedWordAnalysis: Problem = {
  id: "advanced-word-analysis",
  title: "Advanced Word Analysis",
  problemStatement: `<p class='mt-3'>
    Develop a function <code>advancedWordAnalysis(words, increment, n)</code> that performs the following tasks:
    <ol>
      <li>Finds the longest word in the list of words.</li>
      <li>Counts the number of consonants in each word and increments each count by the given integer.</li>
      <li>Generates the first <code>n</code> numbers of the Fibonacci sequence.</li>
    </ol>
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["hello", "world", "hi"], 2, 5`,
      outputText: `{"longestWord": "hello", "consonantCounts": [5, 6, 4], "fibonacciSequence": [0, 1, 1, 2, 3]}`,
      explanation: `The longest word is "hello", consonant counts are incremented by 2, and the first 5 Fibonacci numbers are generated.`
    },
    {
      id: 2,
      inputText: `["apple", "banana"], 1, 3`,
      outputText: `{"longestWord": "banana", "consonantCounts": [4, 4], "fibonacciSequence": [0, 1, 1]}`,
      explanation: `The longest word is "banana", consonant counts are incremented by 1, and the first 3 Fibonacci numbers are generated.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ words.length ≤ 100</code>
  </li>
  <li class='mt-2'>
    <code>0 ≤ n ≤ 100</code>
  </li>`,
  handlerFunction: handlerAdvancedWordAnalysis,
  starterCode: starterCodeAdvancedWordAnalysis,
  order: 21,
  starterFunctionName: "function advancedWordAnalysis("
};