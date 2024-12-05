// function outerFunction() {
//     let outerVariable = 'I am from outer scope!';

//     function innerFunction() {
//         console.log(outerVariable); // Accesses outerVariable
//     }

//     return innerFunction; // Returning the inner function
// }

// const closureFunction = outerFunction(); // outerFunction is executed
// closureFunction(); // Logs: "I am from outer scope!"


function makeCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

let counter = makeCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
counter = "asd"
console.log(counter);  // 2

