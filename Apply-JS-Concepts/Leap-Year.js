function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2098;
const isMyYearLeapyear = isLeapYear(myYear);
console.log('is my year is leap year', isMyYearLeapyear);

const yourYear = 2088;
const isYourYearLeapyear = isLeapYear(yourYear);
console.log('is your year leap year ', isYourYearLeapyear);