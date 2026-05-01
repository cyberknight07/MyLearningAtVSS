const a0 = () => {
  return new Promise((reply, reject) => {
    reply({ message: "Promise A0 success" });
  });
};

const a = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "Promise A success" });
    }, 3000);
  });
};

const b = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "Promise B success" });
    }, 1000);
  });
};

const c = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "Promise C success" });
    }, 1000);
  });
};

const d = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reject({ message: "Promise d failed" });
    }, 2000);
  });
};

const e = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "Promise e success" });
    }, 1000);
  });
};

a0()
  .then((meraOutput) => {
    console.log("a0 then: ", meraOutput);

    a()
      .then((aData) => {
        console.log("a then: ", aData);

        b()
          .then((bData) => {
            console.log("b then: ", bData);

            c()
              .then((cData) => {
                console.log("c then: ", cData);

                d()
                  .then((dData) => {
                    console.log("d then: ", dData);

                    e()
                      .then((eData) => {
                        console.log("e then: ", eData);
                      })
                      .catch((eError) => {
                        console.log("e catch: ", eError);
                      });
                  })
                  .catch((dError) => {
                    console.log("d catch: ", dError);
                  });
                    
              })
          })
          .catch((bError) => {
            console.log("b catch: ", bError);
          });
      })
      .catch((aError) => {
        console.log("a catch: ", aError);
      });
  })
  .catch((meraError) => {
    console.log("a0 catch: ", meraError);
  });