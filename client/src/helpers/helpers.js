// used for constructing simplified date
export  const formattedDate = (date) => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  var day = date.getDay();
  var number = date.getDate();
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();
  var weekday = weekNames[day];

  var dateString = weekday + " " + month + " " + number + ", " + year;

  return dateString
}
