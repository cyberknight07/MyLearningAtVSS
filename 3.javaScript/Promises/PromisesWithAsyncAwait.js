// All promise functions copied from Promises.js
const a0 = () => {
  return new Promise((resolve) => {
    resolve({ message: "Promise A0 success" });
  });
};

const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Promise A success" });
    }, 3000);
  });
};

const b = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Promise B success" });
    }, 1000);
  });
};

const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Promise C success" });
    }, 1000);
  });
};

const d = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({ message: "Promise d failed" });
    }, 2000);
  });
};

const e = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Promise e success" });
    }, 1000);
  });
};

// Async/await wrapper that runs all promises sequentially
const preview = async () => {
  try {
    const a0Res = await a0();
    console.log("a0 result:", a0Res);

    const aRes = await a();
    console.log("a result:", aRes);

    const bRes = await b();
    console.log("b result:", bRes);

    const cRes = await c();
    console.log("c result:", cRes);

    const dRes = await d(); // This will reject and be caught
    console.log("d result:", dRes);

    const eRes = await e();
    console.log("e result:", eRes);
  } catch (error) {
    console.error("Caught error:", error);
  }
};

// Run the demo when the script is executed
preview();