import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeCapitalizeFirstLast = `function capitalizeFirstLast(listsOfStrings) {
  // Write your code here
};`;

const handlerCapitalizeFirstLast = (fn: any) => {
  try {
    const testCases = [
      [["hello", "world"], ["python", "a"]],
      [["x", "ab", "test"]],
      [[], ["capitalize"]],
      [["example", "test"], ["function"]],
      [["capitalize", "first", "last"]],
    ];

    const expectedOutputs = [
      [["HellO", "WorlD"], ["PythoN", "A"]],
      [["X", "AB", "TesT"]],
      [[], ["CapitalizE"]],
      [["ExamplE", "TesT"], ["FunctioN"]],
      [["CapitalizE", "FirsT", "LasT"]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("capitalizeFirstLast handler function error:", error);
    throw new Error(error);
  }
};

export const capitalizeFirstLast: Problem = {
  id: "capitalize-first-last",
  title: "Capitalize First and Last Letter",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>capitalizeFirstLast</code> that capitalizes the first and last letter of each string in a 2D list.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[["hello", "world"], ["python", "a"]]`,
      outputText: `[["HellO", "WorlD"], ["PythoN", "A"]]`,
      explanation: `Each word's first and last letter is capitalized.`
    },
    {
      id: 2,
      inputText: `[["x", "ab", "test"]]`,
      outputText: `[["X", "AB", "TesT"]]`,
      explanation: `Each word's first and last letter is capitalized.`
    },
    {
      id: 3,
      inputText: `[[], ["capitalize"]]`,
      outputText: `[[], ["CapitalizE"]]`,
      explanation: `Each word's first and last letter is capitalized.`
    },
    {
      id: 4,
      inputText: `[["example", "test"], ["function"]]`,
      outputText: `[["ExamplE", "TesT"], ["FunctioN"]]`,
      explanation: `Each word's first and last letter is capitalized.`
    },
    {
      id: 5,
      inputText: `[["capitalize", "first", "last"]]`,
      outputText: `[["CapitalizE", "FirsT", "LasT"]]`,
      explanation: `Each word's first and last letter is capitalized.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ listsOfStrings.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerCapitalizeFirstLast,
  starterCode: starterCodeCapitalizeFirstLast,
  order: 6,
  starterFunctionName: "function capitalizeFirstLast("
};