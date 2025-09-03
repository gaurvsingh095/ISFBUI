import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeDocumentSimilarity = `function calculateSimilarity(doc1: string, doc2: string): number {
  // Write your code here
};`;

const handlerDocumentSimilarity = (fn: (doc1: string, doc2: string) => number) => {
  try {
    const testCases: [string, string][] = [
      ["the cat in the hat", "the cat on the mat"],
      ["hello world", "hello there"],
      ["quick brown fox", "lazy dog"]
    ];
    const expectedOutputs: number[] = [0.75, 0.5, 0.0];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("documentSimilarity handler function error:", error);
    throw new Error(error);
  }
};

export const documentSimilarity: Problem = {
  id: "document-similarity",
  title: "Document Similarity Checker",
  problemStatement: `<p class='mt-3'>
    Write a function <code>calculateSimilarity(doc1, doc2)</code> that returns a similarity score between two documents. The score is the ratio of common words to the total number of unique words in both documents.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"the cat in the hat", "the cat on the mat"`,
      outputText: `0.75`,
      explanation: `The documents share 3 common words out of 4 unique words.`
    },
    {
      id: 2,
      inputText: `"hello world", "hello there"`,
      outputText: `0.5`,
      explanation: `The documents share 1 common word out of 2 unique words.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ length of each document ≤ 1000</code>
  </li>`,
  handlerFunction: handlerDocumentSimilarity,
  starterCode: starterCodeDocumentSimilarity,
  order: 3,
  starterFunctionName: "function calculateSimilarity("
};