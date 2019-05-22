'use strict';
const fs = require('fs');

const text = fs.readFileSync('index.js', 'utf8');
console.log(text);