import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeShiftChars = `function shiftChars(listsOfStrings) {
  // Write your code here
};`;

const handlerShiftChars = (fn: any) => {
  try {
    const testCases = [
      [["Ab~", "yZ"], ["~"]],
      [[]],
      [["abc"]],
      [["Hello", "World"], ["~"]],
      [["123", "456"], ["789"]],
    ];

    const expectedOutputs = [
      [["Bc ", "z["], [" "]],
      [[]],
      [["bcd"]],
      [["Ifmmp", "Xpsme"], [" "]],
      [["234", "567"], ["890"]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("shiftChars handler function error:", error);
    throw new Error(error);
  }
};

export const shiftChars: Problem = {
  id: "shift-chars",
  title: "Shift Characters",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>shiftChars</code> that shifts each character in each string of a 2D list to the next ASCII character.
    If a character is '~', it should wrap around to a space.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[["Ab~", "yZ"], ["~"]]`,
      outputText: `[["Bc ", "z["], [" "]]`,
      explanation: `"Ab~" -> "Bc ", "yZ" -> "z[", "~" -> " "`
    },
    {
      id: 2,
      inputText: `[[]]`,
      outputText: `[[]]`,
      explanation: `Empty list remains unchanged.`
    },
    {
      id: 3,
      inputText: `[["abc"]]`,
      outputText: `[["bcd"]]`,
      explanation: `"abc" -> "bcd"`
    },
    {
      id: 4,
      inputText: `[["Hello", "World"], ["~"]]`,
      outputText: `[["Ifmmp", "Xpsme"], [" "]]`,
      explanation: `"Hello" -> "Ifmmp", "World" -> "Xpsme", "~" -> " "`
    },
    {
      id: 5,
      inputText: `[["123", "456"], ["789"]]`,
      outputText: `[["234", "567"], ["890"]]`,
      explanation: `"123" -> "234", "456" -> "567", "789" -> "890"`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ listsOfStrings.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerShiftChars,
  starterCode: starterCodeShiftChars,
  order: 19,
  starterFunctionName: "function shiftChars("
};