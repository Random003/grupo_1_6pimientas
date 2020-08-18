const fs = require('fs');
const path = require('path');

let model = function (tableName) {
    return {
        filePath: path.join(__dirname,'../data/' + tableName + '.json'),
    
        readFile() {
            let content = fs.readFileSync (this.filePath, 'utf-8');
            if (content) {
                return JSON.parse(content);   
            } else {
                return [];
            }

        },

        writeFile(rows) {
            let productsJson = JSON.stringify(rows, null, " ");
            // para ver beio el archivo json cdo es enorme (null, " ")
            
            fs.writeFileSync(this.filePath, productsJson);
            },
        nextId() {
            let rows = this.readFile();
            let lastRow = rows.pop();
        
            if (lastRow) {
                return ++lastRow.id;
            }
        
            return 1;
        },
        
        all() {
            return this.readFile();
        },
        
        find(id) {
            let rows = this.readFile();
            return rows.find(row => row.id == id);
        },
        
        create(row) {
            let rows = this.readFile();
            row.id = this.nextId();
            rows.push(row);
            this.writeFile(rows);
        
            return row.id;
        }
    
    }
}

module.exports = model;


