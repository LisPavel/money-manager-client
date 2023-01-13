/** @typedef {import("luxon").DateTime} DateTime */

/**
 * @callback checkBetween
 * @param {number} date date in millis
 */

/**
 *
 * @param {DateTime} start
 * @param {DateTime} end
 * @returns {checkBetween}
 */
export const isDateBetween = (start, end) => (date) =>
    date <= end.toMillis() && date >= start.toMillis();
