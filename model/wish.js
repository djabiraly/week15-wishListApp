const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(require.main.filename), 'data', 'wishes.json');

module.exports = class wish {
    constructor(wish){
        this.description = wish;
    }

    saveWish() {
        fs.readFile(filePath, (error, filecontent) =>{
            let wishes = [];

            if(!error){
                wishes = JSON.parse(filecontent);
            } else{
                console.log(error);
            }

            wishes.push(this);
            fs.writeFile(filePath, JSON.stringify(wishes), (error) => {
                if(!error){
                    console.log('wish saved');

                } else{
                    console.log(error); 
                }
            })
        })
    }
}
const fs = require('fs');

function fetchAllWishes(callback) {
  fs.readFile('file.json', (error, fileContent) => {
    if (error) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
}
