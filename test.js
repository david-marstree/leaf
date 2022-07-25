const leaf = require('./index');

const m = leaf.numberFormat(Math.PI * 10000, '%.2f', true);
console.log('m:', m);