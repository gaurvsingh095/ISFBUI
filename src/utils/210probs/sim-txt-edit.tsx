import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSimpleTextEditor = `function editText(commands: string[]): string {
  // Write your code here
};`;

const handlerSimpleTextEditor = (fn: (commands: string[]) => string) => {
  try {
    const testCases: string[][] = [
      ["append hello", "append world", "delete 5", "undo"],
      ["append abc", "delete 2", "append xyz", "undo", "undo"]
    ];
    const expectedOutputs: string[] = ["hello", "abc"];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("simpleTextEditor handler function error:", error);
    throw new Error(error);
  }
};

export const simpleTextEditor: Problem = {
  id: "simple-text-editor",
  title: "Simple Text Editor",
  problemStatement: `<p class='mt-3'>
    Write a function <code>editText(commands)</code> that simulates a simple text editor. The editor supports the following commands:
    <ul>
      <li><code>append text</code>: Append the given text to the editor.</li>
      <li><code>delete k</code>: Delete the last k characters from the editor.</li>
      <li><code>undo</code>: Undo the last operation.</li>
    </ul>
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["append hello", "append world", "delete 5", "undo"]`,
      outputText: `"hello"`,
      explanation: `After undoing the delete, the text is "hello".`
    },
    {
      id: 2,
      inputText: `["append abc", "delete 2", "append xyz", "undo", "undo"]`,
      outputText: `"abc"`,
      explanation: `After undoing the last two operations, the text is "abc".`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ number of commands ≤ 100</code>
  </li>`,
  handlerFunction: handlerSimpleTextEditor,
  starterCode: starterCodeSimpleTextEditor,
  order: 2,
  starterFunctionName: "function editText("
};