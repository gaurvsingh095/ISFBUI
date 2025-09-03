import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeHalveAll = `function halveAll(numbers) {
  // Write your code here
};`;

const handlerHalveAll = (fn: any) => {
  try {
    const testCases = [
      [4, 8, 10, -2],
      [],
      [0, 1],
    ];

    const expectedOutputs = [
      [2.0, 4.0, 5.0, -1.0],
      [],
      [0.0, 0.5],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("halveAll handler function error:", error);
    throw new Error(error);
  }
};

export const halveAll: Problem = {
  id: "halve-all",
  title: "Halve All Numbers",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>halveAll</code> that divides each element of a list of numbers (either integers or floats) by 2. 
    This should be done in-place, and the result should be stored as a float.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[4, 8, 10, -2]`,
      outputText: `[2.0, 4.0, 5.0, -1.0]`,
      explanation: `Each number is divided by 2, and the results are stored as floats.`
    },
    {
      id: 2,
      inputText: `[]`,
      outputText: `[]`,
      explanation: `An empty list remains unchanged.`
    },
    {
      id: 3,
      inputText: `[0, 1]`,
      outputText: `[0.0, 0.5]`,
      explanation: `Each number is divided by 2.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ numbers.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerHalveAll,
  starterCode: starterCodeHalveAll,
  order: 4,
  starterFunctionName: "function halveAll("
};