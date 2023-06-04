/* 
A time series is a series of data points indexed in time order. They are commonly used 
in the financial world, especially in stock markets.

In this challenge you are working with a time series of stock prices. You are given n historical 
records (t1, p1) where the stock at time t1 had a price p1. You have to answer 2 types of  
queries of the form (type, value):

For type 1, given a value v, when was the first time that the price of the stock was at least v?
For type 2, given a value v, what's the maximum price of the stock at a time greater or equal to v?

If for any of these queries the answer is not defined, 
i.e. there are no historical records that match the query, the answer is -1.
*/

function stockQueries(records, queries) {
  const timeStamps = records.timeStamps;
  const prices = records.prices;

  // create an array for storing the maximum prices for each time stamp or greater
  const maxPrices = [];
  let currentMax = Number.NEGATIVE_INFINITY;

  for (let i = timeStamps.length - 1; i >= 0; i--) {
    if (prices[i] > currentMax) {
      currentMax = prices[i];
    }

    maxPrices[i] = currentMax;
  }

  // process the queries
  const result = [];

  for (let query of queries) {
    const [type, value] = query;

    if (type === 1) {
      // find the first time stamp where the price is at least the given value
      let minTime = -1;
      for (let i = 0; i < timeStamps.length; i++) {
        if (prices[i] >= value) {
          minTime = timeStamps[i];
          break;
        }
      }

      result.push(minTime);
    } else if (type === 2) {
      // find the minimum price at a time stamp greater than or equal to the given value
      let maxPrice = -1;
      for (let i = 0; i < timeStamps.length; i++) {
        if (timeStamps[i] >= value) {
          maxPrice = maxPrices[i];
          break;
        }
      }
      result.push(maxPrice);
    }
  }

  return result;
}

// Test case
const records = {
  timeStamps: [1, 2, 4, 8, 10],
  prices: [5, 3, 12, 1, 10],
};

const queries = [
  [1, 10],
  [1, 4],
  [2, 8],
  [2, 3],
  [1, 13],
];

const results = stockQueries(records, queries);
results.forEach((result) => console.log(result));
