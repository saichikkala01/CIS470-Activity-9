const getPreviousDay = require("../modules/getPreviousDate");

test("Previous date test", () => {
    // expect(getPreviousDate(4, 16, 2024)) ....
    const previousDay = getPreviousDay(4, 18, 2024);
    expect(previousDay).toEqual({ month: 4, day: 17, year: 2024 });
});
