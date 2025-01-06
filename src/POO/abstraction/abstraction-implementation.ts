/**
 * Date Class
 * Get Current year
 * Get current month
 * get current date
 * 
 */

const now = new Date();

const currentYear = now.getFullYear()
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate();

console.log(currentYear);
console.log(currentMonth);
console.log(currentDate);