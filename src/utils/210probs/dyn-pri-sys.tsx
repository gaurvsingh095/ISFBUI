import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeDynamicPricing = `function calculatePrice(basePrice: number, demand: number[]): number {
  // Write your code here
};`;

const handlerDynamicPricing = (fn: (basePrice: number, demand: number[]) => number) => {
  try {
    const testCases: [number, number[]][] = [
      [100, [10, 20, 30, 40, 50]],
      [200, [5, 5, 5, 5, 5]],
      [150, [50, 40, 30, 20, 10]]
    ];
    const expectedOutputs: number[] = [150, 200, 100];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("dynamicPricing handler function error:", error);
    throw new Error(error);
  }
};

export const dynamicPricing: Problem = {
  id: "dynamic-pricing",
  title: "Dynamic Pricing System",
  problemStatement: `<p class='mt-3'>
    Write a function <code>calculatePrice(basePrice, demand)</code> that adjusts the base price of a product based on demand over a period. The price increases by 10% if demand increases and decreases by 10% if demand decreases, relative to the previous period.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `100, [10, 20, 30, 40, 50]`,
      outputText: `150`,
      explanation: `Demand increases each period, so the price increases by 10% each time.`
    },
    {
      id: 2,
      inputText: `200, [5, 5, 5, 5, 5]`,
      outputText: `200`,
      explanation: `Demand remains constant, so the price does not change.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ basePrice ≤ 1000</code>
  </li>
  <li class='mt-2'>
    <code>1 ≤ demand.length ≤ 100</code>
  </li>`,
  handlerFunction: handlerDynamicPricing,
  starterCode: starterCodeDynamicPricing,
  order: 1,
  starterFunctionName: "function calculatePrice("
};