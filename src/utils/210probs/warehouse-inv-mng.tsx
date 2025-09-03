import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeWarehouseInventory = `function manageInventory(actions: string[]): { [key: string]: number } {
  // Write your code here
};`;

const handlerWarehouseInventory = (fn: (actions: string[]) => { [key: string]: number }) => {
  try {
    const testCases: string[][] = [
      ["add apple 10", "add banana 5", "remove apple 3", "add orange 7"],
      ["add widget 15", "remove widget 5", "add widget 10", "remove widget 20"]
    ];
    const expectedOutputs: { [key: string]: number }[] = [
      { "apple": 7, "banana": 5, "orange": 7 },
      { "widget": 0 }
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("warehouseInventory handler function error:", error);
    throw new Error(error);
  }
};

export const warehouseInventory: Problem = {
  id: "warehouse-inventory",
  title: "Warehouse Inventory Management",
  problemStatement: `<p class='mt-3'>
    Write a function <code>manageInventory(actions)</code> that processes a list of inventory actions and returns the final inventory state. Each action is a string in the format "add item quantity" or "remove item quantity".
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["add apple 10", "add banana 5", "remove apple 3", "add orange 7"]`,
      outputText: `{"apple": 7, "banana": 5, "orange": 7}`,
      explanation: `After processing all actions, the inventory reflects the correct quantities.`
    },
    {
      id: 2,
      inputText: `["add widget 15", "remove widget 5", "add widget 10", "remove widget 20"]`,
      outputText: `{"widget": 0}`,
      explanation: `The widget inventory cannot go below zero.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ number of actions ≤ 1000</code>
  </li>`,
  handlerFunction: handlerWarehouseInventory,
  starterCode: starterCodeWarehouseInventory,
  order: 2,
  starterFunctionName: "function manageInventory("
};