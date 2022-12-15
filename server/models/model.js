const {v4} = require('uuid');
const fs = require('fs');
const path = require('path');

module.exports = class Model {
    constructor (title, content) {
        this.title = title;
        this.content = content;
        this.id = v4()
    }
    static async getAll() {
        return new Promise((res, rej) => {
            fs.readFile(path.join(__dirname, '..', '..', 'db', 'db.json'), 'utf-8', (err, content) => {
                if (err) rej(err);
                else res(JSON.parse(content))
            })
        })
    }
    static async write (post) {
        const list = await Model.getAll();
        const newList = [post, ...list];
        fs.writeFile(path.join(__dirname, '..', '..', 'db', 'db.json'), JSON.stringify(newList) ,(err) => {
            return new Promise((res, rej) => {
                if (err) rej(err);
                else res(newList)
            })
        })
    }
    static async remove(id) {
        const list = await Model.getAll();
        const newList = list.filter(item => item.id !== id);
        fs.writeFile(path.join(__dirname, '..', '..', 'db', 'db.json'), JSON.stringify(newList) ,(err) => {
            return new Promise((res, rej) => {
                if (err) rej(err);
                else res(newList)
            })
        })
    }
}