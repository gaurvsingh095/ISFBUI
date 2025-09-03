import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeStringToFloat = `function stringToFloat(lst) {
  // Write your code here
};`;

const handlerStringToFloat = (fn: any) => {
  try {
    const testCases = [
      [["3.14", "abc", "0", "-10.5"]],
      [[]],
      [["0.00", "4.2", "4"]],
    ];

    const expectedOutputs = [
      [3.14, "abc", 0.0, -10.5],
      [],
      [0.0, 4.2, 4.0],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Pass the array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("stringToFloat handler function error:", error);
    throw new Error(error);
  }
};

export const stringToFloat: Problem = {
  id: "string-to-float",
  title: "Convert Float Strings to Float Type",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>stringToFloat</code> that converts any valid float strings in a list to float values. 
    Non-convertible strings remain unchanged. This should be done in-place.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["3.14", "abc", "0", "-10.5"]`,
      outputText: `[3.14, "abc", 0.0, -10.5]`,
      explanation: `The valid float strings "3.14", "0", and "-10.5" are converted to floats, while "abc" remains unchanged.`
    },
    {
      id: 2,
      inputText: `[]`,
      outputText: `[]`,
      explanation: `An empty list remains unchanged.`
    },
    {
      id: 3,
      inputText: `["0.00", "4.2", "4"]`,
      outputText: `[0.0, 4.2, 4.0]`,
      explanation: `The valid float strings are converted to float values: "0.00" to 0.0, "4.2" to 4.2, and "4" to 4.0.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ lst.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerStringToFloat,
  starterCode: starterCodeStringToFloat,
  order: 2,
  starterFunctionName: "function stringToFloat("
};