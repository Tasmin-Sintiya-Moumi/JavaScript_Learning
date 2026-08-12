/* Predict, then verify: what does a loop of let vs a loop calling setTimeout print? Search 'let vs var 
setTimeout loop' after trying. */

//using let
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//calling setTimeout
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

