import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeUppercaseOnly = `function uppercaseOnly(original) {
  // Write your code here
};`;

const handlerUppercaseOnly = (fn: any) => {
  try {
    const testCases = [
      ["aBcDeF"],
      ["ABC"],
      ["xyz"],
    ];

    const expectedOutputs = [
      "BDF",
      "ABC",
      "",
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i][0]); // Pass the string directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("uppercaseOnly handler function error:", error);
    throw new Error(error);
  }
};

export const uppercaseOnly: Problem = {
  id: "uppercase-only",
  title: "Keep Only Uppercase Letters",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>uppercaseOnly</code> that returns a new string containing only the uppercase letters from the original string.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"aBcDeF"`,
      outputText: `"BDF"`,
      explanation: `"aBcDeF" → "BDF"`
    },
    {
      id: 2,
      inputText: `"ABC"`,
      outputText: `"ABC"`,
      explanation: `"ABC" → "ABC"`
    },
    {
      id: 3,
      inputText: `"xyz"`,
      outputText: `""`,
      explanation: `"xyz" → "" (no uppercase letters)`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ original.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerUppercaseOnly,
  starterCode: starterCodeUppercaseOnly,
  order: 2,
  starterFunctionName: "function uppercaseOnly("
};