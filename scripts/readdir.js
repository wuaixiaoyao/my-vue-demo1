const fs = require('fs');
const path = require('path')
const dir = fs.readdirSync(path.join(__dirname, '../src/pages'))
console.log('dir', dir);