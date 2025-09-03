import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeGeneratePermutations = `function generatePermutations(s: string): string[] {
  // Write your code here
};`;

const handlerGeneratePermutations = (fn: (s: string) => string[]) => {
  try {
    const testCases: [string][] = [
      ["aab"],
      ["abc"],
      ["aaa"],
    ];

    const expectedOutputs = [
      ["aab", "aba", "baa"],
      ["abc", "acb", "bac", "bca", "cab", "cba"],
      ["aaa"],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.deepStrictEqual(result.sort(), expectedOutputs[i].sort());
    }
    return true;
  } catch (error: any) {
    console.log("generatePermutations handler function error:", error);
    throw new Error(error);
  }
};

export const generatePermutations: Problem = {
  id: "generate-permutations",
  title: "Generate Permutations",
  problemStatement: `<p class='mt-3'>
    Develop a function <code>generatePermutations(s)</code> that returns all unique permutations of the input string <code>s</code>.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"aab"`,
      outputText: `["aab", "aba", "baa"]`,
      explanation: `The string "aab" has three unique permutations.`,
    },
    {
      id: 2,
      inputText: `"abc"`,
      outputText: `["abc", "acb", "bac", "bca", "cab", "cba"]`,
      explanation: `The string "abc" has six unique permutations.`,
    },
  ],
  constraints: `<li class='mt-2'> <code>1 ≤ s.length ≤ 8</code> </li>`,
  handlerFunction: handlerGeneratePermutations,
  starterCode: starterCodeGeneratePermutations,
  order: 1,
  starterFunctionName: "function generatePermutations(",
};