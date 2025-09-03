import assert from "assert";
import { Problem } from "../types/problem";

// Define the TreeNode type
type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

const starterCodeMaxDepth = `function maxDepth(root: TreeNode | null): number {
  // Write your code here
};`;

const handlerMaxDepth = (fn: (root: TreeNode | null) => number) => {
  try {
    const testCases: (TreeNode | null)[] = [
      { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } },
      { val: 1, left: null, right: { val: 2, left: null, right: null } },
      null,
      { val: 0, left: null, right: null },
    ];

    const expectedOutputs = [
      3,
      2,
      0,
      1,
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the root node directly
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("maxDepth handler function error:", error);
    throw new Error(error);
  }
};

export const maxDepth: Problem = {
  id: "max-depth-binary-tree",
  title: "Maximum Depth of Binary Tree",
  problemStatement: `<p class='mt-3'>
    Given the <code>root</code> of a binary tree, return its maximum depth.
    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `root = [3,9,20,null,null,15,7]`,
      outputText: `3`,
      explanation: `The maximum depth is 3: [3, 20, 7] or [3, 20, 15].`
    },
    {
      id: 2,
      inputText: `root = [1,null,2]`,
      outputText: `2`,
      explanation: `The maximum depth is 2: [1, 2].`
    }
  ],
  constraints: `<li class='mt-2'>
    The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.
  </li>
  <li class='mt-2'>
    <code>-100 ≤ Node.val ≤ 100</code>
  </li>`,
  handlerFunction: handlerMaxDepth,
  starterCode: starterCodeMaxDepth,
  order: 1,
  starterFunctionName: "function maxDepth("
};