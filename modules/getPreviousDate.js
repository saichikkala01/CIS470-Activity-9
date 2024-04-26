// Here your code for the get previous date function goes
// you can refer to the getNextDate function and make minor changes

// modules/getPreviousDay.js

function getPreviousDay(month, day, year) {
    // Logic to get the previous day
    // Note: This implementation assumes that leap years are handled appropriately.
    const previousDay = new Date(year, month - 1, day - 1);
    return {
        month: previousDay.getMonth() + 1,
        day: previousDay.getDate(),
        year: previousDay.getFullYear(),
    };
}

module.exports = getPreviousDay;
