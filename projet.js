var fs = require ('fs');

try {
    fs.mkdirSync('hello-world');
    console.log('HELLO WORLD');
}catch(err){
    if(err.code='EXIST'){
        console.log('the directory named hello-world exists');
    }
    else{
        console.log(err);
    }
}