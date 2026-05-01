// Promise 1
function promise1() {
  return new Promise((resolve, reject) => {
    let num = 5;
    console.log("Promise 1 received:", num);

    // logic
    num = num * 2;

    setTimeout(() => {
      resolve(num); // pass to next promise
    }, 1000);
  });
}

// Promise 2
function promise2(input) {
  return new Promise((resolve, reject) => {
    console.log("Promise 2 received:", input);

    // logic
    let result = input + 10;

    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

// Promise 3
function promise3(input) {
  return new Promise((resolve, reject) => {
    console.log("Promise 3 received:", input);

    // logic
    let finalResult = input - 3;

    setTimeout(() => {
      resolve(finalResult);
    }, 1000);
  });
}

// Calling promises
promise1()
  .then((res1) => {
    console.log("After Promise 1:", res1);
    return promise2(res1);
  })
  .then((res2) => {
    console.log("After Promise 2:", res2);
    return promise3(res2);
  })
  .then((res3) => {
    console.log("After Promise 3 (Final Output):", res3);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  const response = async () => {
    try{
          const pro1 = await promise1();
  const pro2 = await promise2(pro1);
  const pro3 = await promise3(pro2);
    }
    catch(e){
        console.log('Data error as ', e);
    }
  }

