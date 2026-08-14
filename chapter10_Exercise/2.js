/*  Write a promise-returning function coinFlip() that resolves 'Heads' or rejects 'Tails' randomly; 
handle both cases.*/

function coinFlip() {
    return new Promise((resolve, reject) => {
        const x = Math.random();

        if (x < 0.5) {
            resolve("Heads");
        } else {
            reject("Tails");
        }
    });
}

coinFlip()
    .then((x) =>  (console.log(x)))
    .catch((error) => (console.log(error)));