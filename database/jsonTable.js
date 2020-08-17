const fs = require('fs');
const path = require('path');

let model = function (tableName) {
    return {
        file: path.join(__dirname,'../database/' + tableName + '.json'),
    
    readFile() {
        let content = fs.readFileSync (this.file, 'utf-8');
        if (content) {
            return JSON.parse(content);   
        } else {
            return [];
        }

        }
    }
}

module.exports = model;