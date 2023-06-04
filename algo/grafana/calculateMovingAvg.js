/* 
Given a time series data in the form of an array of objects containing timestamps and corresponding values, 
write a function to calculate the moving average for a given window size.
*/

function calculateMovingAvg(data, windowSize) {
  const result = [];
  const queue = [];
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    const { timestamp, value } = data[i];

    // add current value to the sum
    sum += value;
    // enqueue the current data point
    queue.push({ timestamp, value });

    // if the window is filled, dequeue the oldest data point
    if (queue.length > windowSize) {
      const removeItem = queue.shift();
      sum -= removeItem.value;
    }

    // calculate moving average if the window is filled
    const average = queue.length === windowSize ? (sum / windowSize).toFixed(2) : null;

    // Add the data point to the result array
    result.push({ timestamp, average });
  }

  console.log(queue);
  return result;
}

const data = [
  { timestamp: 1623715200, value: 10.2 },
  { timestamp: 1623715800, value: 11.4 },
  { timestamp: 1623716400, value: 9.8 },
  { timestamp: 1623717000, value: 12.6 },
  { timestamp: 1623717600, value: 10.9 },
];
const windowSize = 3;
console.log(calculateMovingAvg(data, windowSize));
// Output: [
//   { timestamp: 1623715200, average: null },
//   { timestamp: 1623715800, average: null },
//   { timestamp: 1623716400, average: 10.47 },
//   { timestamp: 1623717000, average: 11.27 },
//   { timestamp: 1623717600, average: 11.1 }
// ]
