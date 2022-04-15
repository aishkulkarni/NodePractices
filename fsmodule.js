const fs = require('fs');
// fs.readFile('file.txt', 'utf8' ,(err, data) => {
//     console.log(err, data);
// })

fs.writeFile('file1.txt', 'hi world im aishwrya', ()=> {
    console.log('its okay to be not okay');
});

console.group('simple'); 
console.log('Grouped'); 
console.groupEnd('simple data'); 
console.log('new section');