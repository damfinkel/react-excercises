import React from "react";

interface Response {
  timestamp: string;
  counter: number;
}

// Read the following posts:
// - useEffect: https://reactjs.org/docs/hooks-effect.html
// - Timeouts and Intervals: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
// - Refs: https://reactjs.org/docs/hooks-reference.html#useref


// Implement a component with a counter that counts seconds.
// Once every 10 seconds, send a request to /counter with the current seconds.
// The endpoint will respond with a timestamp and the counter value. You must
// show those two values in a list next to the counter.
// Also add a button to send the request manually with the current seconds value
// Bonus points: For the counter, show minutes and seconds (e.g. 2:13) instead of only seconds
function Counter() {
  
}

export default Counter;
