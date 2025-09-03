import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeGenerateParentheses = `function generateParentheses(n: number): string[] {
  // Write your code here
};`;

const handlerGenerateParentheses = (fn: (n: number) => string[]) => {
  try {
    const testCases: [number][] = [
      [3],
      [1],
      [2],
      [4]
    ];

    const expectedOutputs = [
      ["((()))", "(()())", "(())()", "()(())", "()()()"],
      ["()"],
      ["(())", "()()"],
      ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.deepStrictEqual(result.sort(), expectedOutputs[i].sort());
    }
    return true;
  } catch (error: any) {
    console.log("generateParentheses handler function error:", error);
    throw new Error(error);
  }
};

export const generateParentheses: Problem = {
  id: "generate-parentheses",
  title: "Generate Parentheses",
  problemStatement: `<p class='mt-3'>
    Develop a function <code>generateParentheses(n)</code> that generates all combinations of <code>n</code> pairs of balanced parentheses.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `3`,
      outputText: `["((()))", "(()())", "(())()", "()(())", "()()()"]`,
      explanation: `There are five combinations of 3 pairs of balanced parentheses.`,
    },
    {
      id: 2,
      inputText: `1`,
      outputText: `["()"]`,
      explanation: `There is one combination of 1 pair of balanced parentheses.`,
    },
    {
      id: 3,
      inputText: `2`,
      outputText: `["(())", "()()"]`,
      explanation: `There are two combinations of 2 pairs of balanced parentheses.`,
    },
    {
      id: 4,
      inputText: `4`,
      outputText: `["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]`,
      explanation: `There are fourteen combinations of 4 pairs of balanced parentheses.`,
    },],
  constraints: `<li class='mt-2'> <code>1 ≤ n ≤ 8</code> </li>`,
  handlerFunction: handlerGenerateParentheses,
  starterCode: starterCodeGenerateParentheses,
  order: 2,
  starterFunctionName: "function generateParentheses(",
};