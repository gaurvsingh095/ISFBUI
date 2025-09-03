import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeFlattenList = `function flattenList(nestedList: any[][]): any[] {
  // Write your code here
};`;

const handlerFlattenList = (fn: (nestedList: any[][]) => any[]) => {
  try {
    const testCases: [any[][]][] = [
      [[[1, 2], [3, 4]]],
      [[[1], [2, 3], [4]]],
      [[[]]],
    ];

    const expectedOutputs = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("flattenList handler function error:", error);
    throw new Error(error);
  }
};

export const flattenList: Problem = {
  id: "flatten-nested-list",
  title: "Flatten Nested List",
  problemStatement: `<p class='mt-3'>
    Create a function <code>flattenList(nestedList)</code> that takes a list of lists and returns a single flattened list containing all the elements.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[[1, 2], [3, 4]]`,
      outputText: `[1, 2, 3, 4]`,
      explanation: `Flattens the nested list into a single list.`
    },
    {
      id: 2,
      inputText: `[[1], [2, 3], [4]]`,
      outputText: `[1, 2, 3, 4]`,
      explanation: `Flattens the nested list into a single list.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>0 ≤ nestedList.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerFlattenList,
  starterCode: starterCodeFlattenList,
  order: 16,
  starterFunctionName: "function flattenList("
};