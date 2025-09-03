import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeRemoveAllLower = `function removeAllLower(twoDStrings) {
  // Write your code here
};`;

const handlerRemoveAllLower = (fn: any) => {
  try {
    const testCases = [
      [["HELLO", "hello", "WORLD"], ["abC", "xyz"]],
      [["mix", "MATCH"], ["TEST", "lower", "UPPER"]],
      [[], ["nochange"]],
      [["apple", "BANANA"], ["grape", "ORANGE"]],
      [["kiwi", "LEMON"], ["melon", "PEACH"]],
    ];

    const expectedOutputs = [
      [["HELLO", "WORLD"], ["abC"]],
      [["MATCH"], ["TEST", "UPPER"]],
      [[], []],
      [["BANANA"], ["ORANGE"]],
      [["LEMON"], ["PEACH"]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("removeAllLower handler function error:", error);
    throw new Error(error);
  }
};

export const removeAllLower: Problem = {
  id: "remove-all-lower",
  title: "Remove Strings Composed Only of Lowercase Letters",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>removeAllLower</code> that takes a 2D list of strings and removes all strings that are entirely lowercase.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[["HELLO", "hello", "WORLD"], ["abC", "xyz"]]`,
      outputText: `[["HELLO", "WORLD"], ["abC"]]`,
      explanation: "Lowercase strings ('hello', 'xyz') are removed."
    },
    {
      id: 2,
      inputText: `[["mix", "MATCH"], ["TEST", "lower", "UPPER"]]`,
      outputText: `[["MATCH"], ["TEST", "UPPER"]]`,
      explanation: "Lowercase strings ('mix', 'lower') are removed."
    },
    {
      id: 3,
      inputText: `[[], ["nochange"]]`,
      outputText: `[[], []]`,
      explanation: "Lowercase string ('nochange') is removed."
    },
    {
      id: 4,
      inputText: `[["apple", "BANANA"], ["grape", "ORANGE"]]`,
      outputText: `[["BANANA"], ["ORANGE"]]`,
      explanation: "Lowercase strings ('apple', 'grape') are removed."
    },
    {
      id: 5,
      inputText: `[["kiwi", "LEMON"], ["melon", "PEACH"]]`,
      outputText: `[["LEMON"], ["PEACH"]]`,
      explanation: "Lowercase strings ('kiwi', 'melon') are removed."
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ twoDStrings.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerRemoveAllLower,
  starterCode: starterCodeRemoveAllLower,
  order: 2,
  starterFunctionName: "function removeAllLower("
};