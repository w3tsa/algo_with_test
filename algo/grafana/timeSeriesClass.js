class TimeSeries {
  constructor() {
    this.data = [];
  }

  addDataPoint(timestamp, value) {
    this.data.push({ timestamp, value });
  }

  getValueAtTime(timestamp) {
    let left = 0;
    let right = this.data.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (this.data[mid].timestamp === timestamp) {
        return this.data[mid].value;
      } else if (this.data[mid].timestamp < timestamp) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return undefined;
  }
}

// Test Cases
const ts = new TimeSeries();

ts.addDataPoint(1, 10);
ts.addDataPoint(2, 15);
ts.addDataPoint(4, 12);
ts.addDataPoint(8, 20);
ts.addDataPoint(10, 18);
// console.log(ts);
// console.log(ts.getValueAtTime());
