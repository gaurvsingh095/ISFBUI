import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeRemovePalindromes = `function removePalindromes(twoDStrings) {
  // Write your code here
};`;

const handlerRemovePalindromes = (fn: any) => {
  try {
    const testCases = [
      [["Racecar", "Bob", "Hello"], ["madam", "otto", "bye"]],
      [["abc", "def"], []],
      [["noon", "civic", "Example"], ["kayak", "test"]],
      [["level", "world"], ["radar", "python"]],
      [["refer", "java"], ["rotor", "code"]],
    ];

    const expectedOutputs = [
      [["Hello"], ["bye"]],
      [["abc", "def"], []],
      [["Example"], ["test"]],
      [["world"], ["python"]],
      [["java"], ["code"]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("removePalindromes handler function error:", error);
    throw new Error(error);
  }
};

export const removePalindromes: Problem = {
  id: "remove-palindromes",
  title: "Remove Palindromes",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>removePalindromes</code> that takes a 2D list of strings and removes all palindromes (strings that read the same forwards and backwards, ignoring case).
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `[["Racecar", "Bob", "Hello"], ["madam", "otto", "bye"]]`,
      outputText: `[["Hello"], ["bye"]]`,
      explanation: "Palindromes ('Racecar', 'Bob', 'madam', 'otto') are removed."
    },
    {
      id: 2,
      inputText: `[["abc", "def"], []]`,
      outputText: `[["abc", "def"], []]`,
      explanation: "No palindromes to remove."
    },
    {
      id: 3,
      inputText: `[["noon", "civic", "Example"], ["kayak", "test"]]`,
      outputText: `[["Example"], ["test"]]`,
      explanation: "Palindromes ('noon', 'civic', 'kayak') are removed."
    },
    {
      id: 4,
      inputText: `[["level", "world"], ["radar", "python"]]`,
      outputText: `[["world"], ["python"]]`,
      explanation: "Palindromes ('level', 'radar') are removed."
    },
    {
      id: 5,
      inputText: `[["refer", "java"], ["rotor", "code"]]`,
      outputText: `[["java"], ["code"]]`,
      explanation: "Palindromes ('refer', 'rotor') are removed."
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ twoDStrings.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerRemovePalindromes,
  starterCode: starterCodeRemovePalindromes,
  order: 3,
  starterFunctionName: "function removePalindromes("
};