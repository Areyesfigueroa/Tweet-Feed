const date = require('date-and-time');

const dateString = 'Sun Sep 13 10:10:36 +0000 2020';

const dateObj = new Date(dateString);

const formattedDate = date.format(dateObj, "M/D/YYYY");
const formattedTime = date.format(dateObj, 'hh:mm A');
console.log(formattedDate);
console.log(formattedTime);