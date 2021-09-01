//asynchronous

const { readFile, writeFile } = require('fs');

readFile('./content/firstFile.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/secondFile.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the appended result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result)
            }
        )
    })
})