import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeAverageUnique = `function averageUnique(values) {
  // Write your code here
};`;

const handlerAverageUnique = (fn: any) => {
  try {
    const testCases = [
      [1, 1, 2, 2, 3, 3],
      [],
      [4, 4, 10, 10],
    ];

    const expectedOutputs = [
      2.0,
      null, // Ensure this matches the expected return value
      7.0,
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("averageUnique handler function error:", error);
    throw new Error(error);
  }
};

export const averageUnique: Problem = {
  id: "average-unique",
  title: "Average of Numbers Without Duplicates",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>averageUnique</code> that calculates the average of the unique elements in the list of numbers. 
    Returns None if the list is empty.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[1, 1, 2, 2, 3, 3]`,
      outputText: `2.0`,
      explanation: `Unique elements are 1, 2, and 3. Their sum is 6. The average is 6 / 3 = 2.0`
    },
    {
      id: 2,
      inputText: `[]`,
      outputText: `None`,
      explanation: `No numbers to calculate, so return None`
    },
    {
      id: 3,
      inputText: `[4, 4, 10, 10]`,
      outputText: `7.0`,
      explanation: `Unique elements are 4 and 10. Their sum is 14, and the average is 14 / 2 = 7.0`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ values.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerAverageUnique,
  starterCode: starterCodeAverageUnique,
  order: 5,
  starterFunctionName: "function averageUnique("
};
