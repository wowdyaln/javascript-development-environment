// this file isn't transpiled, so must use CommonJS ES5


// register babel to transpile before our test run.
require('babel-register')()

// disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function(){}