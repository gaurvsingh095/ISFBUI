import assert from "assert";
import { Problem } from "../types/problem";

const starterCodePrimeFactorization = `function primeFactors(n: number): number[] {
  // Write your code here
};`;

const handlerPrimeFactorization = (fn: (n: number) => number[]) => {
  try {
    const testCases: number[] = [28, 45, 13];
    const expectedOutputs: number[][] = [
      [2, 2, 7],
      [3, 3, 5],
      [13]
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("primeFactorization handler function error:", error);
    throw new Error(error);
  }
};

export const primeFactorization: Problem = {
  id: "prime-factorization",
  title: "Prime Factorization",
  problemStatement: `<p class='mt-3'>
    Write a function <code>primeFactors(n)</code> that returns an array of the prime factors of <code>n</code>.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `28`,
      outputText: `[2, 2, 7]`,
      explanation: `The prime factors of 28 are 2, 2, and 7.`
    },
    {
      id: 2,
      inputText: `13`,
      outputText: `[13]`,
      explanation: `13 is a prime number, so it has no other prime factors.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>2 ≤ n ≤ 1000</code>
  </li>`,
  handlerFunction: handlerPrimeFactorization,
  starterCode: starterCodePrimeFactorization,
  order: 2,
  starterFunctionName: "function primeFactors("
};