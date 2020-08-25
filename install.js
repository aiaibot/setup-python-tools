const exec = require("@actions/exec");

async function installBlack() {
  console.log("Installing black");
  await exec.exec("pip install black");
}

async function installPytest() {
  console.log("Installing pytest");
  await exec.exec("sudo apt-get install python-pytest");
}

module.exports = {
  installBlack, installPytest
}
