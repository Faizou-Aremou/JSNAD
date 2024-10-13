'use strict'
const { promisify } = require('util')

const print = (err, contents) => {
  if (err) console.error(err)
  else console.log(contents)
}
const setTimeoutP = promisify(setTimeout)

const opA = (cb) => {
  return setTimeoutP(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  return setTimeoutP(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  return setTimeoutP(() => {
    cb(null, 'C')
  }, 125)
}

const opAPromise = promisify(opA);
const opBPromise = promisify(opB);
const opCPromise = promisify(opC);

// Async function to run the operations in order
const runOperations = async () => {
  try {
    const resultA = await opAPromise(print);
    const resultB = await opBPromise(print);
    const resultC = await opCPromise(print);
  } catch (err) {
    console.error(err);
  }
};

runOperations();