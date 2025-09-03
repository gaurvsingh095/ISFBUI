import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeTaskScheduler = `function optimizeSchedule(tasks: string[], cooldown: number): number {
  // Write your code here
};`;

const handlerTaskScheduler = (fn: (tasks: string[], cooldown: number) => number) => {
  try {
    const testCases: [string[], number][] = [
      [["A", "A", "A", "B", "B", "B"], 2],
      [["A", "B", "A", "B", "A", "B"], 0],
      [["A", "A", "A", "B", "B", "C"], 1]
    ];
    const expectedOutputs: number[] = [8, 6, 7];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(...testCases[i]);
      assert.strictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("taskScheduler handler function error:", error);
    throw new Error(error);
  }
};

export const taskScheduler: Problem = {
  id: "task-scheduler",
  title: "Task Scheduler Optimization",
  problemStatement: `<p class='mt-3'>
    Write a function <code>optimizeSchedule(tasks, cooldown)</code> that returns the minimum time required to complete all tasks, given that the same task must have a cooldown period before it can be executed again.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["A", "A", "A", "B", "B", "B"], 2`,
      outputText: `8`,
      explanation: `Tasks are scheduled with a cooldown period to minimize total time.`
    },
    {
      id: 2,
      inputText: `["A", "B", "A", "B", "A", "B"], 0`,
      outputText: `6`,
      explanation: `No cooldown is needed, so tasks are executed consecutively.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ tasks.length ≤ 1000</code>
  </li>
  <li class='mt-2'>
    <code>0 ≤ cooldown ≤ 100</code>
  </li>`,
  handlerFunction: handlerTaskScheduler,
  starterCode: starterCodeTaskScheduler,
  order: 2,
  starterFunctionName: "function optimizeSchedule("
};