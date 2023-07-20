const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let startTime;
  let endTime;
  let result = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    startTime = Date.now();
    result.push(addNums(i));
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
  }
  return result;
}

function addManyNums10Timing(increment) {
  let startTime;
  let endTime;
  let result = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    startTime = Date.now();
    result.push(addManyNums(i));
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
  }

  return result;
}

n = 1000000;
console.log(`addNums(${n}): `);
console.time("addNums10Timing()");
addNums10Timing(1000000); // big-O: O(n)
console.timeEnd("addNums10Timing()");

console.log("\n***********\n");

n = 5000;

console.log(`addManyNums(${n}): `);
console.time("addManyNums10Timing()");
addManyNums10Timing(5000); // big-O: O(n^2)
console.timeEnd("addManyNums10Timing()");
