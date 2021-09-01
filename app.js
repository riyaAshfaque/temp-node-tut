// npm - global command, comes with node, node package manager
// npm -- version

// local dependency - use it in this particular project
// npm i <packageName>

// global dependency - use in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc)
// npm init (step-by-step, press enter to skip)
// npm init -y (everything default)

// devDependencies - npm -i nodemon -D / --save-dev - To restart out app after  production
// testing packages, linking, formhiding all these packages we can add in devDependencies
// while in prod we used the dependencies that the app is using and not those which we added for coding

// inside scripts if we add our command it will be executed when we do npm what name we have added to that command
// for some commands we can directly use nmp and for some we use npm run
// nodemon automatically restart my app automatically

// .gitignore specifies the files which are to be ignored while adding the files on GIT HUB 
// git init
// git add .

const _ = require('lodash')
const arrItems = [1, [2, [3, [4]]]]

console.log(_.flatMapDeep(arrItems.join()))