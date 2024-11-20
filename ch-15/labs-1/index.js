'use strict';
const { join } = require('path');
const path = join(__dirname,'child.js');
function exercise(myEnvVar) {
  // TODO return a child process with
  // a single environment variable set
  // named MY_ENV_VAR. The MY_ENV_VAR
  // environment variable's value should
  // be the value of the myEnvVar parameter
  // passed to this exercise function
  const { spawnSync, execSync } = require('child_process');
  const sp = execSync(`${process.execPath} "${path}"`, {
    env: { MY_ENV_VAR: myEnvVar },
  });
  return sp;
}

module.exports = exercise;
