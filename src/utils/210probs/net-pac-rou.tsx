import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeNetworkPacketRouting = `function routePackets(network: { [key: string]: string[] }, start: string, end: string): number {
  // Write your code here
};`;

const handlerNetworkPacketRouting = (fn: (network: { [key: string]: string[] }, start: string, end: string) => number) => {
  try {
    const testCases: [{ [key: string]: string[] }, string, string][] = [
      [{ "A": ["B", "C"], "B": ["D"], "C": ["D"], "D": [] }, "A", "D"],
      [{ "X": ["Y"], "Y": ["Z"], "Z": ["X"] }, "X", "Z"]
    ];
    const expectedOutputs: number[] = [2, 2];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("networkPacketRouting handler function error:", error);
    throw new Error(error);
  }
};

export const networkPacketRouting: Problem = {
  id: "network-packet-routing",
  title: "Network Packet Routing",
  problemStatement: `<p class='mt-3'>
    Write a function <code>routePackets(network, start, end)</code> that returns the minimum number of hops required to route a packet from the start node to the end node in a network graph.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `{"A": ["B", "C"], "B": ["D"], "C": ["D"], "D": []}, "A", "D"`,
      outputText: `2`,
      explanation: `The shortest path from A to D is through B or C, requiring 2 hops.`
    },
    {
      id: 2,
      inputText: `{"X": ["Y"], "Y": ["Z"], "Z": ["X"]}, "X", "Z"`,
      outputText: `2`,
      explanation: `The shortest path from X to Z is through Y, requiring 2 hops.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ number of nodes ≤ 100</code>
  </li>`,
  handlerFunction: handlerNetworkPacketRouting,
  starterCode: starterCodeNetworkPacketRouting,
  order: 3,
  starterFunctionName: "function routePackets("
};