const fs = require('fs');
const path = require('path');

let model = function (tableName) {
    return {
        filePath: path.join(__dirname,'../data/' + tableName + '.json'),
            
        readFile() {
            let content = fs.readFileSync (this.filePath, 'utf-8');
            if (content) {
                return JSON.parse(content);   
            } 
            return [];

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

        findByFields(fields, value) {
            if(!fields || !value) { return []; }
            let rows = this.readFile();
            return rows.find(row => row[fields] == value);
            
            //return rows.filter(row => 
            //    fields.find(field => 
            //        row[field] && row[field].toLowerCase().includes(value.toLowerCase())
            //    ));
        },
        findByField(field, value) {
            let rows = this.readFile();
            return rows.find(row => row[field] == value);
        },
        findAllByField(field, value) {
            let rows = this.readFile();
            return rows.filter(row => row[field] == value);
        },
        create(row) {
            let rows = this.readFile();
            row.id = this.nextId();
            rows.push(row);
            this.writeFile(rows);
        
            return row.id;
        },

        update(row) {
            let rows = this.readFile();
            let updatedRows = rows.map(r => r.id == row.id ? row : r);
            this.writeFile(updatedRows);
            return row.id;
        },
        delete(id) {
            let rows = this.readFile();
            let updatedRows = rows.filter(row => row.id != id);
            this.writeFile(updatedRows);
        }
    
    }
}

module.exports = model;


