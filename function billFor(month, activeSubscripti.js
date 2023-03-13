function billFor(month, activeSubscription, users) {
  if (!activeSubscription || users.length === 0) {
    return 0;
  }

  // Calculate daily rate for subscription
  const dailyRate =
    activeSubscription.monthlyPriceInDollars / daysInMonth(month);

  // Create map to track number of active users for each day
  const activeUsersByDay = new Map();

  // Iterate over each user and update activeUsersByDay
  for (const user of users) {
    const activationDate = user.activatedOn;
    const deactivationDate = user.deactivatedOn || lastDayOfMonth(new Date());

    // Iterate over each day between activation and deactivation date (inclusive)
    let currentDate = activationDate;
    while (currentDate <= deactivationDate) {
      const currentDay = currentDate.toISOString().substring(0, 10);
      const currentCount = activeUsersByDay.get(currentDay) || 0;
      activeUsersByDay.set(currentDay, currentCount + 1);
      currentDate = nextDay(currentDate);
    }
  }

  // Calculate total for the month
  let total = 0;
  let currentDate = firstDayOfMonth(new Date(month));
  while (currentDate <= lastDayOfMonth(new Date(month))) {
    const currentDay = currentDate.toISOString().substring(0, 10);
    const numActiveUsers = activeUsersByDay.get(currentDay) || 0;
    const dailyTotal = numActiveUsers * dailyRate;
    total += dailyTotal;
    currentDate = nextDay(currentDate);
  }

  return parseFloat(total.toFixed(2));
}

function daysInMonth(month) {
  return lastDayOfMonth(new Date(month)).getDate();
}
