const interpolateTimeSeries = (data, interval) => {
  const result = [];

  for (let i = 0; i < data.length - 1; i++) {
    const current = data[i];
    const next = data[i + 1];

    // Add the current time to the result array
    result.push(current);

    // calculate the number missing intervals between current and next
    const missingIntervals = Math.round((next.time - current.time) / interval) - 1;

    // Interpolate missing  values
    if (missingIntervals > 0) {
      const valueDelta = (next.value - current.value) / (missingIntervals + 1);
      let time = current.time;

      for (let j = 0; j < missingIntervals; j++) {
        time += interval;
        const value = current.value + valueDelta * (j + 1);
        result.push({ time, value });
      }
    }
  }

  //   Add last value to result
  result.push(data[data.length - 1]);

  return result;
};

const data = [
  { time: 1, value: 10 },
  { time: 3, value: 30 },
  { time: 7, value: 70 },
];

// Test cases
const testCases = [
  {
    interval: 1,
    expected: [
      { time: 1, value: 10 },
      { time: 2, value: 20 },
      { time: 3, value: 30 },
      { time: 4, value: 40 },
      { time: 5, value: 50 },
      { time: 6, value: 60 },
      { time: 7, value: 70 },
    ],
  },
  {
    interval: 2,
    expected: [
      { time: 1, value: 10 },
      { time: 3, value: 30 },
      { time: 5, value: 50 },
      { time: 7, value: 70 },
    ],
  },
  {
    interval: 0.5,
    expected: [
      { time: 1, value: 10 },
      { time: 1.5, value: 15 },
      { time: 2, value: 20 },
      { time: 2.5, value: 25 },
      { time: 3, value: 30 },
      { time: 3.5, value: 35 },
      { time: 4, value: 40 },
      { time: 4.5, value: 45 },
      { time: 5, value: 50 },
      { time: 5.5, value: 55 },
      { time: 6, value: 60 },
      { time: 6.5, value: 65 },
      { time: 7, value: 70 },
    ],
  },
];

// console.log(interpolateTimeSeries(data, 0.5));

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('interpolateTimeSeries', () => {
    testCases.forEach((testCase) => {
      const { interval, expected } = testCase;
      it('should interpolate', () => {
        const actual = interpolateTimeSeries(data, interval);
        console.log(interval);
        expect(actual).toEqual(expected);
      });
    });
  });
}
