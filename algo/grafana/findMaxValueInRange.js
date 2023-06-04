/* 
Given a list of timestamp-value pairs representing a time series, 
write a function that returns the maximum value and the corresponding 
timestamp within a given time range.
*/

function findMaxValueInRange(data, start, end) {
  let maxValue = data[0].value;
  let maxTimestamp = data[0].timestamp;
  for (let i = 0; i < data.length; i++) {
    if (data[i].timestamp >= start && data[i].timestamp <= end) {
      maxValue = Math.max(maxValue, data[i].value);
      maxTimestamp = Math.max(maxTimestamp, data[i].timestamp);
    }
  }
  return { maxValue, maxTimestamp };
}

const data = [
  { timestamp: 1623715200, value: 10.2 },
  { timestamp: 1623715800, value: 11.4 },
  { timestamp: 1623716400, value: 9.8 },
  { timestamp: 1623717000, value: 12.6 },
  { timestamp: 1623717600, value: 10.9 },
];

const startTime = 1623715800;
const endTime = 1623717000;

console.log(findMaxValueInRange(data, startTime, endTime)); // {maxValue: 12.6, maxTimestamp: 1623717000}
