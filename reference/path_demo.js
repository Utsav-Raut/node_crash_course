const path = require('path');

// Base file name
// console.log(__filename);
// console.log(path.basename(__filename));

// Directory name
// console.log(__dirname);
// console.log(path.dirname(__filename));

// file extension
// console.log(path.extname(__filename));

// create path object
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));