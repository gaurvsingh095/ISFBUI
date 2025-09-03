import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeIncrementDictValues = `function incrementDictValues(d: Record<string, number>, increment: number): Record<string, number> {
  // Write your code here
};`;

const handlerIncrementDictValues = (fn: (d: Record<string, number>, increment: number) => Record<string, number>) => {
  try {
    const testCases: [Record<string, number>, number][] = [
      [{ 'a': 1, 'b': 2 }, 3],
      [{}, 5],
      [{ 'x': 10 }, -2],
    ];

    const expectedOutputs = [
      { 'a': 4, 'b': 5 },
      {},
      { 'x': 8 },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("incrementDictValues handler function error:", error);
    throw new Error(error);
  }
};

export const incrementDictValues: Problem = {
  id: "dictionary-value-incrementer",
  title: "Dictionary Value Incrementer",
  problemStatement: `<p class='mt-3'>
    Write a function <code>incrementDictValues(d, increment)</code> that takes a dictionary and an integer, incrementing each value in the dictionary by the given integer.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `{'a': 1, 'b': 2}, 3`,
      outputText: `{'a': 4, 'b': 5}`,
      explanation: `Each value in the dictionary is incremented by 3.`
    },
    {
      id: 2,
      inputText: `{}, 5`,
      outputText: `{}`,
      explanation: `An empty dictionary remains unchanged.`
    }
  ],
  constraints: `<li class='mt-2'>
    The dictionary contains integer values.
  </li>`,
  handlerFunction: handlerIncrementDictValues,
  starterCode: starterCodeIncrementDictValues,
  order: 17,
  starterFunctionName: "function incrementDictValues("
};