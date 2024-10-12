'use strict'
const os = require('os')
console.log('Process ID', os.platform())
setInterval(() => {
}, 5000)
setTimeout(() => {
process.exit(1)
}, 0)