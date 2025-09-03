import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeShortestString = `function shortestString(lst) {
  // Write your code here
};`;

const handlerShortestString = (fn: any) => {
  try {
    const testCases = [
      [["hello", "hi", "hey"]],
      [["abc", "zy", "za"]],
      [[]],
      [["apple", "banana", "kiwi"]],
      [["one", "two", "three", "four"]],
    ];

    const expectedOutputs = [
      "hi",
      "za",
      null,
      "kiwi",
      "two",
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]); // Pass the array directly
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("shortestString handler function error:", error);
    throw new Error(error);
  }
};

export const shortestString: Problem = {
  id: "shortest-string",
  title: "Return Shortest String In List",
  problemStatement: `<p class='mt-3'>
    Write a function named <code>shortestString</code> that returns the shortest string from the list.
    If there are multiple strings of the same shortest length, return the last one encountered. If the list is empty, return <code>None</code>.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["hello", "hi", "hey"]`,
      outputText: `"hi"`,
      explanation: `"hi" (2 letters) and "hey" (3 letters), "hi" is shorter`
    },
    {
      id: 2,
      inputText: `["abc", "zy", "za"]`,
      outputText: `"za"`,
      explanation: `"zy" and "za" both 2 letters, last encountered is "za"`
    },
    {
      id: 3,
      inputText: `[]`,
      outputText: `None`,
      explanation: `Empty list, so return None`
    },
    {
      id: 4,
      inputText: `["apple", "banana", "kiwi"]`,
      outputText: `"kiwi"`,
      explanation: `"kiwi" is the shortest string`
    },
    {
      id: 5,
      inputText: `["one", "two", "three", "four"]`,
      outputText: `"two"`,
      explanation: `"one" and "two" both 3 letters, last encountered is "two"`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ lst.length ≤ 10</code>
  </li>`,
  handlerFunction: handlerShortestString,
  starterCode: starterCodeShortestString,
  order: 1,
  starterFunctionName: "function shortestString("
};