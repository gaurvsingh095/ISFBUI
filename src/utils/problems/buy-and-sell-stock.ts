import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeBestTimeToBuyAndSellStock = `function maxProfit(prices: number[]): number {
  // Write your code here
};`;

const handlerBestTimeToBuyAndSellStock = (fn: (prices: number[]) => number) => {
  try {
    const testCases = [
      [[7, 1, 5, 3, 6, 4]],
      [[7, 6, 4, 3, 1]],
      [[1, 2, 3, 4, 5]],
      [[2, 4, 1]],
    ];

    const expectedOutputs = [
      5, // Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5
      0, // No transaction is done, i.e., max profit = 0
      4, // Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4
      2, // Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Pass the prices array directly
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("maxProfit handler function error:", error);
    throw new Error(error);
  }
};

export const bestTimeToBuyAndSellStock: Problem = {
  id: "best-time-to-buy-and-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  problemStatement: `<p class='mt-3'>
    You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `prices = [7,1,5,3,6,4]`,
      outputText: `5`,
      explanation: `Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.`
    },
    {
      id: 2,
      inputText: `prices = [7,6,4,3,1]`,
      outputText: `0`,
      explanation: `In this case, no transactions are done and the max profit = 0.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ prices.length ≤ 10<sup>5</sup></code>
  </li>
  <li class='mt-2'>
    <code>0 ≤ prices[i] ≤ 10<sup>4</sup></code>
  </li>`,
  handlerFunction: handlerBestTimeToBuyAndSellStock,
  starterCode: starterCodeBestTimeToBuyAndSellStock,
  order: 1,
  starterFunctionName: "function maxProfit("
};