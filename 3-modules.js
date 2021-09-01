//ComonJS, every file is a module(by default)
//modules - encapsulated code (only share minimum)
 
const names = require('./4-names'); 
const sayHiF = require('./5-utils'); 
const data = require('./6-alternative-flavouring')
console.log(data)
sayHiF(names.name1)
require('./7-mind-grenade')