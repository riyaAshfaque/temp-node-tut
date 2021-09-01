const {readFileSync, writeFileSync} = require('fs');

const firstFile =   readFileSync('./content/firstFile.txt', 'utf8')
const secondFile =   readFileSync('./content/secondFile.txt', 'utf8')


writeFileSync(
    './content/result-sync.txt',
    `Here is the appended result: ${firstFile}, ${secondFile}`, 
    { flag: 'a'}
)