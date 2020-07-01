function leap(year) {
    while(isNaN(year)) {
        year = prompt("enter a year to determine is it is a leap year");
    }

    if(year % 4 != 0) {
        return "common year";
    }
    else if (year % 100 != 0) {
        return "leap year";
    }
    else if (year % 400 != 0) {
        return "common year";
    }
    else {
        return "leap year";
    }
}

console.log(leap(prompt("enter a year to determine is it is a leap year")));