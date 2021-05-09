// import moment here; use this package in each function
let moment = require('moment')

const today = () => {
  // write code for dates.today
   moment().format('dddd');
   let todayDay = moment().format('dddd');
   console.log(todayDay)
   return todayDay;
}

const calendar = () => {
  // write code for dates.calendar
  
  let calendarDate = moment().format('MMMM D[,] YYYY');
  console.log(moment().format('MMMM D[,] YYYY'));
  return calendarDate;
  

}

const currentTime = () => {
  let nowTime = moment().format('LTS');
  return nowTime;
}

module.exports = {
  today,
  calendar,
  currentTime
}