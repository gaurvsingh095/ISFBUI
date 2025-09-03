import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeNestedListToDict = `function nestedListToDict(nestedList: any[][]): Record<string, any[]> {
  // Write your code here
};`;

const handlerNestedListToDict = (fn: (nestedList: any[][]) => Record<string, any[]>) => {
  try {
    const testCases: [any[][]][] = [
      [[["a", 1, 2], ["b", 3, 4]]],
      [[["key", "value"]]],
      [[]],
    ];

    const expectedOutputs = [
      { "a": [1, 2], "b": [3, 4] },
      { "key": ["value"] },
      {},
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("nestedListToDict handler function error:", error);
    throw new Error(error);
  }
};

export const nestedListToDict: Problem = {
  id: "nested-list-to-dictionary-converter",
  title: "Nested List to Dictionary Converter",
  problemStatement: `<p class='mt-3'>
    Create a function <code>nestedListToDict(nestedList)</code> that converts a list of lists into a dictionary, using the first element of each sublist as the key and the rest as the value.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[["a", 1, 2], ["b", 3, 4]]`,
      outputText: `{"a": [1, 2], "b": [3, 4]}`,
      explanation: `Converts the nested list into a dictionary.`
    },
    {
      id: 2,
      inputText: `[["key", "value"]]`,
      outputText: `{"key": ["value"]}`,
      explanation: `Converts the nested list into a dictionary.`
    }
  ],
  constraints: `<li class='mt-2'>
    Each sublist contains at least one element.
  </li>`,
  handlerFunction: handlerNestedListToDict,
  starterCode: starterCodeNestedListToDict,
  order: 7,
  starterFunctionName: "function nestedListToDict("
};