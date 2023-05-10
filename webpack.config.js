const path = require('path');

module.exports = {
  /* entry: Entry is the starting point of the application */
  entry: path.resolve(__dirname, 'src', 'index.js'),
  /* output: Where will we put the assembly of our application */
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};
