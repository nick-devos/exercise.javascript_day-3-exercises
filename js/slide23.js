function smaller() {
    var int1, int2;
    while(isNaN(int1) || isNaN(int2)) {
    int1 = prompt("enter first number");
    int2 = prompt("enter second number");
    }
    if(int1 < int2) { return int1; }
    else { return int2; }
}

console.log(smaller());

function smaller3() {
    let smallerOfTwo = smaller();
    let int3;
    while(isNaN(int3)){
    int3 = prompt("enter third number");
    }
    if(smallerOfTwo < int3) { return smallerOfTwo; }
    else { return int3; }
}

console.log(smaller3());