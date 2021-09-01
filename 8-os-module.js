const os = require('os');

//This is the uptime of the system
console.log(`System Uptime is ${os.uptime}`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs)