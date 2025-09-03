import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeContainerWithMostWater = `function maxArea(height) {
  // Write your code here
};`;

// checks if the user has the correct code
const handlerContainerWithMostWater = (fn: any) => {
  try {
    const testCases = [
      [[1,8,6,2,5,4,8,3,7]],
      [[1,1]],
      [[4,3,2,1,4]],
      [[1,2,1]],
    ];

    const expectedOutputs = [
      49,
      1,
      16,
      2,
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Container With Most Water handler function error");
    throw new Error(error);
  }
};

export const containerWithMostWater: Problem = {
  id: "container-with-most-water",
  title: "Container With Most Water",
  problemStatement: `<p class='mt-3'>
    Given <code>n</code> non-negative integers <code>height[0], height[1], ..., height[n-1]</code>, where each represents a point at coordinate <code>(i, height[i])</code>. <br>
    <em>n</em> vertical lines are drawn such that the two endpoints of line <em>i</em> is at <code>(i, height[i])</code> and <code>(i, 0)</code>. <br>
    Find two lines, which together with the x-axis forms a container, such that the container contains the most water.
  </p>
  <p class='mt-3'>
    <strong>Note:</strong> You may not slant the container.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "height = [1,8,6,2,5,4,8,3,7]",
      outputText: "49",
      explanation: "The maximum area is formed between lines at index 1 and 8, with height 8 and 7, respectively."
    },
    {
      id: 2,
      inputText: "height = [1,1]",
      outputText: "1",
      explanation: "The maximum area is formed between the two lines, both of height 1."
    },
    {
      id: 3,
      inputText: "height = [4,3,2,1,4]",
      outputText: "16",
      explanation: "The maximum area is formed between lines at index 0 and 4, both of height 4."
    },
    {
      id: 4,
      inputText: "height = [1,2,1]",
      outputText: "2",
      explanation: "The maximum area is formed between lines at index 0 and 2, both of height 1."
    },
  ],
  constraints: `<li class='mt-2'>
    <code>2 ≤ height.length ≤ 10<sup>5</sup></code>
  </li> <li class='mt-2'>
  <code>0 ≤ height[i] ≤ 10<sup>4</sup></code>
  </li>`,
  handlerFunction: handlerContainerWithMostWater,
  starterCode: starterCodeContainerWithMostWater,
  order: 6,
  starterFunctionName: "function maxArea(",
};