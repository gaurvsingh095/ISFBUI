import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeWordLadder = `function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  // Write your code here
};`;

const handlerWordLadder = (fn: (beginWord: string, endWord: string, wordList: string[]) => number) => {
  try {
    const testCases: [string, string, string[]][] = [
      ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]],
      ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]]
    ];
    const expectedOutputs: number[] = [5, 0];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("wordLadder handler function error:", error);
    throw new Error(error);
  }
};

export const wordLadder: Problem = {
  id: "word-ladder",
  title: "Word Ladder",
  problemStatement: `<p class='mt-3'>
    Write a function <code>ladderLength(beginWord, endWord, wordList)</code> that returns the length of the shortest transformation sequence from <code>beginWord</code> to <code>endWord</code>, or 0 if no such sequence exists. Each transformed word must exist in the word list.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"hit", "cog", ["hot","dot","dog","lot","log","cog"]`,
      outputText: `5`,
      explanation: `The shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 steps.`
    },
    {
      id: 2,
      inputText: `"hit", "cog", ["hot","dot","dog","lot","log"]`,
      outputText: `0`,
      explanation: `There is no possible transformation from "hit" to "cog".`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ wordList.length ≤ 5000</code>
  </li>`,
  handlerFunction: handlerWordLadder,
  starterCode: starterCodeWordLadder,
  order: 3,
  starterFunctionName: "function ladderLength("
};