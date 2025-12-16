const { execSync } = require('child_process');
console.log(execSync('whoami').toString());
