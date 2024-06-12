//Exercise1: Temperature check

let temperature= 20;

if (temperature < 0)  {
console.log("it's freezing ");
    }
else if (temperature >= 0 && temperature <= 15) {
        console.log("its cold ");
    }
    else if (temperature >=16 && temperature <= 25)
        {
            console.log("its mild ");
        }
else if (temperature > 25){
    console.log("its warm ");
}

//switch statement

let temp=15;

switch(true){
    case (temp < 0):
    console.log("its freezing ");
    break;
    case(temp >= 0 && temp <= 15):
    console.log("its cold ");
    break;
    case(temp >=16 && temp <=25):
    console.log("its mild");
    break;
    case (temp > 25):
        console.log("its warm");
        break;

}

//Exercise 2: divisibility check
let num=30;

    if (num % 2 === 0 && num % 3 === 0){
        console.log("Divisible by both");
    } else if(num % 2 === 0){
        console.log("Divisble by 2");
    } else if(num % 3 === 0){
        console.log("Divisble by 3");
} else {
    console.log("not Divisble by 2 or 3");
}


// switch statement

let number = 17;

switch(true){
case(number % 2 === 0 && number % 3 === 0):
console.log("Divisible by both");
break;
case(number % 2===0):
console.log("Divisble by 2");
break;
case(number % 3===0):
console.log("Divisble by 3");
break;
default:
    console.log("Not Divisible by 2 or 3");
}

//Exercise 3: For loops

//print numbers from 1t0 10
for (let i=1;i<=10;i++){
    console.log(i);
}

//print all even numbers from 1 to 20

for(let i=1;i<=20;i++){
if(i % 2 ===0){
    console.log(i);
}
}

//calculate sum of all numbers from 1 to 100
let sum=0;
for(let i=1;i<=100;i++){

    sum+=i;
}
console.log("sum of all numbers ",sum);

//print each element ofarray

const numbers = [1,2,3,4,5];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//fidn and print largestnumber in array

const values = [3, 7, 2, 5, 10, 6];
let largest = values[0]; 

for (let i = 1; i < values.length; i++) {
    if (values[i] > largest) {
        largest = values[i];
    }
}



console.log("The largest number in the array is:", largest);


//Exercise 4: While loops


//Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//Print all even numbers between 1 and 20

console.log("Even numbers between 1 and 20:");
let val = 1;
while (val <= 20) {
    if (val % 2 === 0) {
        console.log(val);
    }
    val++;
}


//Calculate the sum of all numbers from 1 to 100

let sum2 = 0;
let j = 1;
while (j <= 100) {
    sum2 += j;
    j++;
}
console.log("Sum of numbers from 1 to 100:", sum2);


//Print all multiples of 5 less than 50
console.log("Multiples of 5 less than 50:");
let k = 1;
while (k < 50) {
    if (k % 5 === 0) {
        console.log(k);
    }
    k++;
}


//Exercise 5: Do While loops

//Print numbers from 1 to 10
console.log("Numbers from 1 to 10:");
let p = 1;
do {
    console.log(p);
    p++;
} while (i <= 10);


//Calculate the sum of all numbers from 1 to 100

let sum3 = 0;
let l = 1;
do {
    sum3 += l;
    l++;
} while (l <= 100);
console.log("Sum of numbers from 1 to 100:", sum3);


//prompt the user to enter a number greater than 10

let userNumber;
do {
    userNumber = parseInt(prompt("Enter a number greater than 10:"));
} while (isNaN(userNumber) || userNumber <= 10);
console.log("Valid number entered:", userNumber);


//Create a simple guessing game where the user must guess a 
//number between 1 and 10. The game continues until the user 
//guesses the correct number

const correctNum = Math.floor(Math.random() * 10) + 1; 

let guess;
do 
{
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (guess < correctNum) {
        console.log("invalid. Try again.");
    } 
} while (guess !== correctNum);
console.log("Nice!!!You are Cooking:", correctNumber);
