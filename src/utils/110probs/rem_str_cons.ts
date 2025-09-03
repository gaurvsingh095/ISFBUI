import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeRemoveWithRepeats = `function removeWithRepeats(twoDStrings) {
  // Write your code here
};`;

const handlerRemoveWithRepeats = (fn: any) => {
  try {
    const testCases = [
      [["letter", "cat", "food"], ["loop", "testing"]],
      [["HeLLo", "abc", "AAbb"], ["BBaa"]],
      [[], ["Test"]],
      [["success", "failure"], ["book", "read"]],
      [["apple", "banana"], ["grape", "kiwi"]],
    ];

    const expectedOutputs = [
      [["cat"], ["testing"]],
      [["abc"], []],
      [[], ["Test"]],
      [["failure"], ["read"]],
      [["banana"], ["grape", "kiwi"]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("removeWithRepeats handler function error:", error);
    throw new Error(error);
  }
};

export const removeWithRepeats: Problem = {
  id: "remove-with-repeats",
  title: "Remove Strings with Repeating Consecutive Letters",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>removeWithRepeats</code> that removes (in place) any string that contains at least one pair of repeating consecutive letters in a 2D list.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[["letter", "cat", "food"], ["loop", "testing"]]`,
      outputText: `[["cat"], ["testing"]]`,
      explanation: `"letter" (tt), "food" (oo), and "loop" (oo) are removed.`
    },
    {
      id: 2,
      inputText: `[["HeLLo", "abc", "AAbb"], ["BBaa"]]`,
      outputText: `[["abc"], []]`,
      explanation: `"HeLLo" (LL), "AAbb" (AA, bb), and "BBaa" (BB) are removed.`
    },
    {
      id: 3,
      inputText: `[[], ["Test"]]`,
      outputText: `[[], ["Test"]]`,
      explanation: `No strings with repeating consecutive letters to remove.`
    },
    {
      id: 4,
      inputText: `[["success", "failure"], ["book", "read"]]`,
      outputText: `[["failure"], ["read"]]`,
      explanation: `"success" (ss) and "book" (oo) are removed.`
    },
    {
      id: 5,
      inputText: `[["apple", "banana"], ["grape", "kiwi"]]`,
      outputText: `[["banana"], ["grape", "kiwi"]]`,
      explanation: `"apple" (pp) is removed.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ twoDStrings.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerRemoveWithRepeats,
  starterCode: starterCodeRemoveWithRepeats,
  order: 5,
  starterFunctionName: "function removeWithRepeats("
};