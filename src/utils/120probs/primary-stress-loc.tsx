import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeFindPrimaryStress = `function findPrimaryStress(phonemes: string[]): number | null {
  // Write your code here
};`;

const handlerFindPrimaryStress = (fn: (phonemes: string[]) => number | null) => {
  try {
    const testCases: [string[]][] = [
      [["a", "b1", "c"]],
      [["a", "b", "c"]],
      [["1a", "b", "c"]],
    ];

    const expectedOutputs = [
      1,
      null,
      0,
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("findPrimaryStress handler function error:", error);
    throw new Error(error);
  }
};

export const findPrimaryStress: Problem = {
  id: "primary-stress-locator",
  title: "Primary Stress Locator",
  problemStatement: `<p class='mt-3'>
    Write a function <code>findPrimaryStress(phonemes)</code> that returns the index of the primary stress marker in a list of phonemes, or <code>null</code> if no primary stress is found.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["a", "b1", "c"]`,
      outputText: `1`,
      explanation: `The primary stress marker '1' is found at index 1.`
    },
    {
      id: 2,
      inputText: `["a", "b", "c"]`,
      outputText: `null`,
      explanation: `No primary stress marker is found.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ phonemes.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerFindPrimaryStress,
  starterCode: starterCodeFindPrimaryStress,
  order: 10,
  starterFunctionName: "function findPrimaryStress("
};