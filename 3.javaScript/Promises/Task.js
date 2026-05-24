function promise1() {
  return new Promise((resolve, reject) => {
    let num = 5;
    console.log("Promise 1 received:", num);

    num = num * 2;

    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
}

function promise2(input) {
  return new Promise((resolve, reject) => {
    console.log("Promise 2 received:", input);

    let result = input + 10;

    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

function promise3(input) {
  return new Promise((resolve, reject) => {
    console.log("Promise 3 received:", input);

    let finalResult = input - 3;

    setTimeout(() => {
      resolve(finalResult);
    }, 1000);
  });
}

// Callback hell style
promise1()
  .then((res1) => {
    console.log("After Promise 1:", res1);

    promise2(res1)
      .then((res2) => {
        console.log("After Promise 2:", res2);

        promise3(res2)
          .then((res3) => {
            console.log("After Promise 3 (Final Output):", res3);
          })
          .catch((err) => {
            console.error("Error in Promise 3:", err);
          });
      })
      .catch((err) => {
        console.error("Error in Promise 2:", err);
      });
  })
  .catch((err) => {
    console.error("Error in Promise 1:", err);
  });

const runPromise = async () => {
  // Convert the above callback hell to async await here

  try {
    const pro1 = await promise1();
    const pro2 = await promise2(pro1);
    const pro3 = await promise3(pro2);
    console.log("The final answer is ", pro3);
  } catch (e) {
    console.error("Error in Promise :", err);
  }

};

runPromise();