for (let i = 1; i <= 3; i++) {
  var promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, 1000);
  });
  promise.then((result) => {
    console.log(result);
  });
}

promise.finally((result) => {
  console.log("Done");
});
