const core = require(`@actions/core`);
const { installBlack, installPytest } = require("./install");

async function run() {
  try {
    installBlack();
    installPytest();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
