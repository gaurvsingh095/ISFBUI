import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSocialNetworkInfluence = `function calculateInfluence(network: { [key: string]: string[] }, person: string): number {
  // Write your code here
};`;

const handlerSocialNetworkInfluence = (fn: (network: { [key: string]: string[] }, person: string) => number) => {
  try {
    const testCases: [{ [key: string]: string[] }, string][] = [
      [{ "Alice": ["Bob", "Charlie"], "Bob": ["David"], "Charlie": [], "David": [] }, "Alice"],
      [{ "Alice": ["Bob"], "Bob": ["Charlie"], "Charlie": ["Alice"] }, "Bob"]
    ];
    const expectedOutputs: number[] = [3, 2];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("socialNetworkInfluence handler function error:", error);
    throw new Error(error);
  }
};

export const socialNetworkInfluence: Problem = {
  id: "social-network-influence",
  title: "Social Network Influence",
  problemStatement: `<p class='mt-3'>
    Given a social network represented as a graph where each person is a node and each connection is a directed edge, write a function <code>calculateInfluence(network, person)</code> that returns the total number of people influenced by the given person, directly or indirectly.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `{"Alice": ["Bob", "Charlie"], "Bob": ["David"], "Charlie": [], "David": []}, "Alice"`,
      outputText: `3`,
      explanation: `Alice influences Bob and Charlie directly, and David indirectly through Bob.`
    },
    {
      id: 2,
      inputText: `{"Alice": ["Bob"], "Bob": ["Charlie"], "Charlie": ["Alice"]}, "Bob"`,
      outputText: `2`,
      explanation: `Bob influences Charlie directly and Alice indirectly through Charlie.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ number of people ≤ 100</code>
  </li>`,
  handlerFunction: handlerSocialNetworkInfluence,
  starterCode: starterCodeSocialNetworkInfluence,
  order: 1,
  starterFunctionName: "function calculateInfluence("
};