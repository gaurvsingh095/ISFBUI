import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSwapDictKeysValues = `function swapDictKeysValues(d: Record<string, any>): Record<any, string> {
  // Write your code here
};`;

const handlerSwapDictKeysValues = (fn: (d: Record<string, any>) => Record<any, string>) => {
  try {
    const testCases: [Record<string, any>][] = [
      [{ 'a': 1, 'b': 2 }],
      [{}],
      [{ 'x': 'y' }],
    ];

    const expectedOutputs = [
      { 1: 'a', 2: 'b' },
      {},
      { 'y': 'x' },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("swapDictKeysValues handler function error:", error);
    throw new Error(error);
  }
};

export const swapDictKeysValues: Problem = {
  id: "dictionary-key-value-swapper",
  title: "Dictionary Key-Value Swapper",
  problemStatement: `<p class='mt-3'>
    Write a function <code>swapDictKeysValues(d)</code> that returns a new dictionary with keys and values swapped from the original dictionary, assuming all values are unique.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `{'a': 1, 'b': 2}`,
      outputText: `{1: 'a', 2: 'b'}`,
      explanation: `Swaps keys and values in the dictionary.`
    },
    {
      id: 2,
      inputText: `{}`,
      outputText: `{}`,
      explanation: `An empty dictionary remains unchanged.`
    }
  ],
  constraints: `<li class='mt-2'>
    All values in the dictionary are unique.
  </li>`,
  handlerFunction: handlerSwapDictKeysValues,
  starterCode: starterCodeSwapDictKeysValues,
  order: 8,
  starterFunctionName: "function swapDictKeysValues("
};