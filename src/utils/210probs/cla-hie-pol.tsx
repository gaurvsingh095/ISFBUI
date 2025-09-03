import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeBankingSystem = `function bankingSystem(): string[] {
  // Write your code here
  return [];
};`;

const handlerBankingSystem = (fn: () => string[]) => {
  try {
    const expectedOutputs = [
      ["SavingsAccount: Balance: 1000, Interest Rate: 0.05", "CheckingAccount: Balance: 2000, Transaction Fee: 1.5"],
      ["SavingsAccount: Balance: 500, Interest Rate: 0.03", "CheckingAccount: Balance: 1500, Transaction Fee: 2.0"],
      ["SavingsAccount: Balance: 2000, Interest Rate: 0.04", "CheckingAccount: Balance: 3000, Transaction Fee: 1.0"],
    ];

    const result = fn();
    assert.deepStrictEqual(result, expectedOutputs[0]); // Adjust index for different test cases
    return true;
  } catch (error: any) {
    console.log("bankingSystem handler function error:", error);
    throw new Error(error);
  }
};

export const bankingSystem: Problem = {
  id: "banking-system",
  title: "Banking System",
  problemStatement: `<p class='mt-3'>
    Design a class hierarchy for a simple banking system with a base class <code>Account</code> and two derived classes <code>SavingsAccount</code> and <code>CheckingAccount</code>.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `N/A`,
      outputText: `["SavingsAccount: Balance: 1000, Interest Rate: 0.05", "CheckingAccount: Balance: 2000, Transaction Fee: 1.5"]`,
      explanation: `The system should correctly instantiate and describe each account type.`,
    },
    {
      id: 2,
      inputText: `N/A`,
      outputText: `["SavingsAccount: Balance: 500, Interest Rate: 0.03", "CheckingAccount: Balance: 1500, Transaction Fee: 2.0"]`,
      explanation: `The system should handle different balances and rates/fees for each account type.`,
    },
    {
      id: 3,
      inputText: `N/A`,
      outputText: `["SavingsAccount: Balance: 2000, Interest Rate: 0.04", "CheckingAccount: Balance: 3000, Transaction Fee: 1.0"]`,
      explanation: `The system should correctly instantiate and describe each account type with varying parameters.`,
    },
  ],
  constraints: `<li class='mt-2'> Implement class hierarchy and polymorphism. </li>`,
  handlerFunction: handlerBankingSystem,
  starterCode: starterCodeBankingSystem,
  order: 3,
  starterFunctionName: "function bankingSystem(",
};