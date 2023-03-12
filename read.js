const fs = require('fs');

fs.writeFile('welcome.txt','hello world', err => {
    if (err) throw err;
    console.log('write to file');
    fs.rename('welcome.txt','hello.txt', err => {
        if (err) throw err;
        console.log('file renamed');
        fs.readFile('hello.txt', 'utf-8', (err, data) => {
             if (err) throw err;
             console.log(data);
        })
    })
})