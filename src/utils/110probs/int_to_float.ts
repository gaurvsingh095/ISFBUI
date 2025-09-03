import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeIntToFloat = `function intToFloat(listsOfInts) {
  // Write your code here
};`;

const handlerIntToFloat = (fn: any) => {
  try {
    const testCases = [
      [[1, 2], [0, -1]],
      [],
      [[10], [-20, 30]],
    ];

    const expectedOutputs = [
      [[1.0, 2.0], [0.0, -1.0]],
      [],
      [[10.0], [-20.0, 30.0]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("intToFloat handler function error:", error);
    throw new Error(error);
  }
};

export const intToFloat: Problem = {
  id: "int-to-float",
  title: "Int to Float",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>intToFloat</code> that converts each integer into a float in-place.
    Return the same 2D list after mutation.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1, 2], [0, -1]]`,
      outputText: `[[1.0, 2.0], [0.0, -1.0]]`,
      explanation: `"1 -> 1.0", "2 -> 2.0", "0 -> 0.0", "-1 -> -1.0"`
    },
    {
      id: 2,
      inputText: `[]`,
      outputText: `[]`,
      explanation: `An empty list remains unchanged.`
    },
    {
      id: 3,
      inputText: `[[10], [-20, 30]]`,
      outputText: `[[10.0], [-20.0, 30.0]]`,
      explanation: `"10 -> 10.0", "-20 -> -20.0", "30 -> 30.0"`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ listsOfInts.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerIntToFloat,
  starterCode: starterCodeIntToFloat,
  order: 5,
  starterFunctionName: "function intToFloat("
};