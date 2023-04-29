/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    }
}

function createEmployeeRecords(array) {
    return array.map(employeeData => createEmployeeRecord(employeeData))
}
  
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({ type: 'TimeIn', date, hour: parseInt(hour, 10) })
    return this
}
  
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({ type: 'TimeOut', date, hour: parseInt(hour, 10) })
    return this
}
  
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100
    return hoursWorked
}
  
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    const wagesEarned = hoursWorked * this.payPerHour
    return wagesEarned
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPay, employeeRecord) => {
      const wages = allWagesFor.call(employeeRecord)
      return totalPay + wages
    }, 0)
}