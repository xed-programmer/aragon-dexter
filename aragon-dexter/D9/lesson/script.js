/*
Synchronous Programming: In synchronous programming, tasks are executed one after the other in a sequential manner. Each task must complete before the next task can start. This blocking behavior can lead to inefficient use of resources, especially when dealing with time-consuming operations.
*/
// console.log("First");
// console.log("Second");
// console.log("Third");

/*
Asynchronous JavaScript allows code to run concurrently, without blocking the execution of other code. It's commonly used for tasks that take time, such as making HTTP requests or waiting for user input.
*/

// console.log('First');

// setTimeout(()=>{
//     console.log('Second');    
// }, 2000);

// console.log('Third');



// console.log('Start Boiling Water');
// setTimeout(()=>{
//     console.log('add tea leaves');
// },2000);
// console.log('Serve tea');

/**
 * Callbacks are functions that are passed as 
 * arguments to other functions and get executed 
 * at a later time. They are commonly used in 
 * JavaScript for handling asynchronous operations.
 */

// console.log('Step 2 Complete');
// console.log('Step 3 Complete');

// const step1 = (callback) => {
//     setTimeout(()=>{
//         console.log('Step 1 Complete');

//         callback();
//     }, 1000);
// }

// const step2 = (callback) => {
//     setTimeout(()=>{
//         console.log('Step 2 Complete');
//         callback();
//     }, 2000);
// }

// const step3 = (callback) => {
//     setTimeout(()=>{
//         console.log('Step 3 Complete');

//         callback();
//     }, 2000);
// }

/**
 * Callback hell refers to the situation where 
 * multiple nested callbacks make the code difficult 
 * to read and maintain. It often occurs when dealing 
 * with multiple asynchronous operations that depend 
 * on each other.
 */

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log('All Steps complete');
//         });
//     });
// });

/**
 * Addressing Callback Hell using Promises 
 * Promises provide an alternative approach 
 * to handle asynchronous operations. 
 * They allow you to write asynchronous code 
 * in a more sequential and readable manner.
 */

// const step1 = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log('Step 1 complete.');
//             resolve();           
//         }, 1000);
//     });
// }

// const step2 = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log('Step 2 complete.');
//             resolve();           
//         }, 1000);
//     });
// }

// const step3 = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log('Step 3 complete.');
//             resolve();           
//         }, 1000);
//     });
// }

// step1()
//     .then(step2)
//     .then(step3)
//     .then(()=>{
//         console.log('All steps completed');    
//     })
//     .catch((err)=>{
//         console.error('An error occured:', err);
//     });

/**
 * Async/Await
 * Async/Await is a modern approach for handling 
 * asynchronous code in JavaScript. It provides a 
 * more concise and synchronous-looking syntax 
 * compared to using callbacks or chaining promises.
 */

const step1 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Step 1 complete.');
            resolve();           
        }, 1000);
    });
}

const step2 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Step 2 complete.');
            resolve();           
        }, 1000);
    });
}

const step3 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Step 3 complete.');
            resolve();           
        }, 1000);
    });
}

const performSteps = async () => {
    try{
        await step1();
        await step2();
        await step3();
    }catch (err){
        console.error('An error occured:', err);
    }
}