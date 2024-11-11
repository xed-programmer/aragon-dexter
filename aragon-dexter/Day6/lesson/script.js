// Creat an array

let fruits = ['apple', 'banana', 'orange'];

fruits.push('strawberry');

fruits.pop();

console.log(fruits);

// array iteration
let numbers = [1, 2, 3, 4];
for(number of numbers){
    console.log(number);    
}

// Array forEach
let colors = ['red', 'green', 'blue'];

colors.forEach((c)=>{
    console.log(c);    
});

// MEthods and Properties

// length
console.log('Array Length:',numbers.length);

// indexOF
console.log('Index of 3:', numbers.indexOf(3));

// includes
console.log('Includes 5:', numbers.includes(5));

// join
console.log('Join Array', numbers.join(' - '));

// slice 
console.log('Sliced Array', numbers.slice(1));

