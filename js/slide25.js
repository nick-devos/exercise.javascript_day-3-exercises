function month(stringInput) {
    let yearAndMonth = stringInput.split(" ");
    if(leap(yearAndMonth[0]) == "leap year" && yearAndMonth[1] == 2) {
        return 29;
    } 
    
    else {
        switch(yearAndMonth[1]) {
            case "1": return 31;
            case "2": return 28;
            case "3": return 31;
            case "4": return 30;
            case "5": return 31;
            case "6": return 30;
            case "7": return 31;
            case "8": return 31;
            case "9": return 30;
            case "10": return 31;
            case "11": return 30;
            case "12": return 31;
        }
    }
}

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

console.log(month(prompt("enter a year and a numerical month seperated by a space (ex. 2019 2)")) + " days");