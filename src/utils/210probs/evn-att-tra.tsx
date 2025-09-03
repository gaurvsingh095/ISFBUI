import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeEventAttendanceTracker = `function trackAttendance(events: string[]): { [key: string]: number } {
  // Write your code here
};`;

const handlerEventAttendanceTracker = (fn: (events: string[]) => { [key: string]: number }) => {
  try {
    const testCases: string[][] = [
      ["join Alice", "join Bob", "leave Alice", "join Charlie"],
      ["join Dave", "join Eve", "leave Dave", "leave Eve", "join Frank"]
    ];
    const expectedOutputs: { [key: string]: number }[] = [
      { "Bob": 1, "Charlie": 1 },
      { "Frank": 1 }
    ];

    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i]);
      assert.deepStrictEqual(result, expectedOutputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("eventAttendanceTracker handler function error:", error);
    throw new Error(error);
  }
};

export const eventAttendanceTracker: Problem = {
  id: "event-attendance-tracker",
  title: "Event Attendance Tracker",
  problemStatement: `<p class='mt-3'>
    Write a function <code>trackAttendance(events)</code> that processes a list of event actions and returns the final list of attendees. Each action is a string in the format "join name" or "leave name".
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `["join Alice", "join Bob", "leave Alice", "join Charlie"]`,
      outputText: `{"Bob": 1, "Charlie": 1}`,
      explanation: `Alice leaves, so only Bob and Charlie are present.`
    },
    {
      id: 2,
      inputText: `["join Dave", "join Eve", "leave Dave", "leave Eve", "join Frank"]`,
      outputText: `{"Frank": 1}`,
      explanation: `Only Frank is present at the end.`
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ number of events ≤ 1000</code>
  </li>`,
  handlerFunction: handlerEventAttendanceTracker,
  starterCode: starterCodeEventAttendanceTracker,
  order: 1,
  starterFunctionName: "function trackAttendance("
};