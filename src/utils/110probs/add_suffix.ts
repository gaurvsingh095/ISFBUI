import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeAddSuffix = `function addSuffix(listsOfStrings) {
  // Write your code here
};`;

const handlerAddSuffix = (fn: any) => {
  try {
    const testCases = [
      [["task", "walk"], ["play"]],
      [[], ["Ok"]],
      [["hey", "test"], []],
      [["code", "review"], ["example"]],
      [["suffix", "add"], ["function", "test"]],
    ];

    const expectedOutputs = [
      [["task_done", "walk_done"], ["play_done"]],
      [[], ["Ok_done"]],
      [["hey_done", "test_done"], []],
      [["code_done", "review_done"], ["example_done"]],
      [["suffix_done", "add_done"], ["function_done", "test_done"]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("addSuffix handler function error:", error);
    throw new Error(error);
  }
};

export const addSuffix: Problem = {
  id: "add-suffix",
  title: "Add Suffix to Strings",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>addSuffix</code> that takes a 2D list of strings and appends "_done" to each string in place.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: '[["task", "walk"], ["play"]]',
      outputText: '[["task_done", "walk_done"], ["play_done"]]',
      explanation: 'Each string has "_done" appended to it.'
    },
    {
      id: 2,
      inputText: '[[], ["Ok"]]',
      outputText: '[[], ["Ok_done"]]',
      explanation: 'The string "Ok" has "_done" appended to it.'
    },
    {
      id: 3,
      inputText: '[["hey", "test"], []]',
      outputText: '[["hey_done", "test_done"], []]',
      explanation: 'Each string in the first list has "_done" appended to it.'
    },
    {
      id: 4,
      inputText: '[["code", "review"], ["example"]]',
      outputText: '[["code_done", "review_done"], ["example_done"]]',
      explanation: 'Each string has "_done" appended to it.'
    },
    {
      id: 5,
      inputText: '[["suffix", "add"], ["function", "test"]]',
      outputText: '[["suffix_done", "add_done"], ["function_done", "test_done"]]',
      explanation: 'Each string has "_done" appended to it.'
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ listsOfStrings.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerAddSuffix,
  starterCode: starterCodeAddSuffix,
  order: 1.1,
  starterFunctionName: "function addSuffix("
};