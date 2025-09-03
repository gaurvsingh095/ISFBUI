import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeChange = `function change(amount: number, coins: number[]): number {
  // Write your code here
};`;

const handlerChange = (fn: (amount: number, coins: number[]) => number) => {
  try {
    const testCases: [number, number[]][] = [
      [5, [1, 2, 5]],
      [3, [2]],
      [10, [10]],
      [0, [1, 2, 3]],
      [7, [2, 3, 5]],
    ];

    const expectedOutputs = [4, 0, 1, 1, 2];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("change handler function error:", error);
    throw new Error(error);
  }
};

export const coinComb: Problem = {
  id: "coin-change-ii",
  title: "Coin Change II",
  problemStatement: `<p class='mt-3'>
    Develop a function <code>change(amount, coins)</code> that returns the number of combinations that make up the given amount using the provided coin denominations.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `amount = 5, coins = [1, 2, 5]`,
      outputText: `4`,
      explanation: `There are four ways to make up the amount 5 using the coins [1, 2, 5]:<br>
                    1. 5 = 5<br>
                    2. 5 = 2 + 2 + 1<br>
                    3. 5 = 2 + 1 + 1 + 1<br>
                    4. 5 = 1 + 1 + 1 + 1 + 1`,
    },
    {
      id: 2,
      inputText: `amount = 3, coins = [2]`,
      outputText: `0`,
      explanation: `The amount 3 cannot be made up just with coins of denomination 2.`,
    },
    {
      id: 3,
      inputText: `amount = 10, coins = [10]`,
      outputText: `1`,
      explanation: `There is only one way to make up the amount 10, which is using the coin of denomination 10.`,
    },
    {
      id: 4,
      inputText: `amount = 0, coins = [1, 2, 3]`,
      outputText: `1`,
      explanation: `There is one way to make up the amount 0, which is using no coins.`,
    },
    {
      id: 5,
      inputText: `amount = 7, coins = [2, 3, 5]`,
      outputText: `2`,
      explanation: `There are two ways to make up the amount 7 using the coins [2, 3, 5]:<br>
                    1. 7 = 2 + 5<br>
                    2. 7 = 2 + 2 + 3`,
    },
  ],
  constraints: `<li class='mt-2'> <code>0 ≤ amount ≤ 5000</code> </li>
                <li class='mt-2'> <code>1 ≤ coins.length ≤ 300</code> </li>
                <li class='mt-2'> <code>1 ≤ coins[i] ≤ 5000</code> </li>`,
  handlerFunction: handlerChange,
  starterCode: starterCodeChange,
  order: 1,
  starterFunctionName: "function change(",
};