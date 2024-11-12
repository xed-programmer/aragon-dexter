// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(x){
    return x%2==0;
}
// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for(i=0;i<=10;i++){
    console.log(i,'is even:',isEven(i));    
}
// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
function multiply(x,y){
    return x*y;
}
// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
while(true){
    let num1 = prompt('Enter a number');
    if(num1<0) break;    
    let num2 = prompt('Enter a number');
    if(num2<0) break;
    console.log(num1,'x',num2,'=',multiply(num1,num2));;    
}
// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(s){
    temp='';
    for(i=s.length-1;i>=0;i--){
        temp += s.charAt(i);
    }
    return temp;
}
// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log(reverseString('hello'));

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
function countVowels(s){
    let vowels = ['a','e', 'i', 'o', 'u'];
    let count = 0;
    for(i=0;i<s.length;i++){
        if(vowels.includes(s.charAt(i))){
            count++;            
        }
    }
    return count;
}
// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log(countVowels('JavaScript'));

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax(arr){
    let max=arr[0];
    for(l=0,r=1;r<arr.length;r++){
        if(arr[l]>arr[r]){
            max=arr[l];
        }else{
            max=arr[r];
            l=r;
        }
    }
    return max;
}
// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log('the max number is',findMax([4, 9, 2, 7, 5]));

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(x){
    if(x==1)
        return 1;
    return x * calculateFactorial(x-1);
}
// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log('factorial:',calculateFactorial(5));

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
function isPalindrome(s){
    for(l=0,r=s.length-1;l<s.length;l++){
        if(s[l]!=s[r-l]){
            return false;
        }
    }
    return true;
}
// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log(isPalindrome('level'));

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(arr){
    return arr.reduce((p,c)=>p+=c,0);
}
// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log('Sum array', sumArray([1, 2, 3, 4, 5]));

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(s){
    let firstLetter = s.charAt(0).toUpperCase();
    return firstLetter + s.slice(1);
}
// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log('Capitalize First Letter:', capitalizeFirstLetter('javascript'));

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(arr){
    let evenNumbers = arr.filter((num)=>isEven(num));
    return evenNumbers;
}
// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log('list of even numbers', filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));