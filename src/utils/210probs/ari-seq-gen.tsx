import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeArithmeticSequenceGenerator = `function generateArithmeticSequence(start: number, difference: number, n: number): number[] {
  // Write your code here
};`;

const handlerArithmeticSequenceGenerator = (fn: (start: number, difference: number, n: number) => number[]) => {
  try {
    const testCases: [number, number, number][] = [
      [1, 2, 5],
      [3, 5, 4],
      [0, 10, 3]
    ];
    const expectedOutputs: number[][] = [
      [1, 3, 5, 7, 9],
      [3, 8, 13, 18],
      [0, 10, 20]
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("arithmeticSequenceGenerator handler function error:", error);
    throw new Error(error);
  }
};

export const arithmeticSequenceGenerator: Problem = {
  id: "arithmetic-sequence-generator",
  title: "Arithmetic Sequence Generator",
  problemStatement: `<p class='mt-3'>
    Write a function <code>generateArithmeticSequence(start, difference, n)</code> that returns an array of the first <code>n</code> terms of an arithmetic sequence starting with <code>start</code> and having a common difference of <code>difference</code>.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `1, 2, 5`,
      outputText: `[1, 3, 5, 7, 9]`,
      explanation: `The sequence starts at 1 and increases by 2 each time.`
    },
    {
      id: 2,
      inputText: `3, 5, 4`,
      outputText: `[3, 8, 13, 18]`,
      explanation: `The sequence starts at 3 and increases by 5 each time.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ n ≤ 50</code>
  </li>`,
  handlerFunction: handlerArithmeticSequenceGenerator,
  starterCode: starterCodeArithmeticSequenceGenerator,
  order: 3,
  starterFunctionName: "function generateArithmeticSequence("
};