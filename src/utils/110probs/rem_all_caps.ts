import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeRemoveAllCaps = `function removeAllCaps(twoDStrings) {
  // Write your code here
};`;

const handlerRemoveAllCaps = (fn: any) => {
  try {
    const testCases = [
      [["DOG", "Cat"], ["BIRD", "fish"]],
      [["python", "JAVA", "C++"], ["JAVASCRIPT", "ruby"]],
      [[], ["HELLO"]],
      [["HELLO", "world"], ["GOODBYE", "moon"]],
      [["UPPER", "lower"], ["MIXED", "case"]],
    ];

    const expectedResults = [
      [["Cat"], ["fish"]],
      [["python", "C++"], ["ruby"]],
      [[], []],
      [["world"], ["moon"]],
      [["lower"], ["case"]],
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the 2D array directly
      assert.deepStrictEqual(result, expectedResults[i]);
    }

    return true;
  } catch (error: any) {
    console.log("removeAllCaps handler function error:", error);
    throw new Error(error);
  }
};

export const removeAllCaps: Problem = {
  id: "remove-all-caps",
  title: "Remove All-Caps Strings",
  problemStatement: `<p class='mt-3'>Write a function that removes all fully capitalized strings from a 2D list.</p>`,
  examples: [
    {
      id: 1,
      inputText: '[["DOG", "Cat"], ["BIRD", "fish"]]',
      outputText: '[["Cat"], ["fish"]]',
      explanation: `All fully capitalized strings are removed.`
    },
    {
      id: 2,
      inputText: '[["python", "JAVA", "C++"], ["JAVASCRIPT", "ruby"]]',
      outputText: '[["python", "C++"], ["ruby"]]',
      explanation: `All fully capitalized strings are removed.`
    },
    {
      id: 3,
      inputText: '[[], ["HELLO"]]',
      outputText: '[[], []]',
      explanation: `All fully capitalized strings are removed.`
    },
    {
      id: 4,
      inputText: '[["HELLO", "world"], ["GOODBYE", "moon"]]',
      outputText: '[["world"], ["moon"]]',
      explanation: `All fully capitalized strings are removed.`
    },
    {
      id: 5,
      inputText: '[["UPPER", "lower"], ["MIXED", "case"]]',
      outputText: '[["lower"], ["case"]]',
      explanation: `All fully capitalized strings are removed.`
    }
  ],
  constraints: `<li class='mt-2'>2D list of strings.</li>`,
  handlerFunction: handlerRemoveAllCaps,
  starterCode: starterCodeRemoveAllCaps,
  order: 1.2,
  starterFunctionName: "function removeAllCaps("
};