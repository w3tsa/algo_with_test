/* Given a list of timestamps and corresponding values representing a time series, 
write a function that calculates the average value for a given time range.
 */

function calculateAverage(timestamps, values, startTime, endTime) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < timestamps.length; i++) {
    if (timestamps[i] >= startTime && timestamps[i] <= endTime) {
      sum += values[i];
      count++;
    }
  }
  return sum / count;
}

const timestamps = [1623715200, 1623715800, 1623716400, 1623717000, 1623717600];
const values = [10.2, 11.4, 9.8, 12.6, 10.9];
const startTime = 1623715800;
const endTime = 1623717000;

console.log(calculateAverage(timestamps, values, startTime, endTime)); // 11.2666666666667
