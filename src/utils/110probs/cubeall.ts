import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeCubeAll = `function cubeAll(nums) {
  // Write your code here
};`;

const handlerCubeAll = (fn: any) => {
  try {
    const testCases = [
      [1, 2, -3],
      [],
      [0, 0.5, -2],
    ];

    const expectedOutputs = [
      [1, 8, -27],
      [],
      [0, 0.125, -8],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("cubeAll handler function error:", error);
    throw new Error(error);
  }
};

export const cubeAll: Problem = {
  id: "cube-all",
  title: "Cube All",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>cubeAll</code> that raises each element in a list of numbers (either integers or floats) to the power of 3. 
    This should be done in-place.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[1, 2, -3]`,
      outputText: `[1, 8, -27]`,
      explanation: `Each number is cubed, with 1^3 = 1, 2^3 = 8, and (-3)^3 = -27.`
    },
    {
      id: 2,
      inputText: `[]`,
      outputText: `[]`,
      explanation: `An empty list remains unchanged.`
    },
    {
      id: 3,
      inputText: `[0, 0.5, -2]`,
      outputText: `[0, 0.125, -8]`,
      explanation: `Each number is raised to the power of 3.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ nums.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerCubeAll,
  starterCode: starterCodeCubeAll,
  order: 5,
  starterFunctionName: "function cubeAll("
};