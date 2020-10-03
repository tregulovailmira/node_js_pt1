'use strict';

const fs = require('fs');
const utils = require('util');

const writeFile = utils.promisify(fs.writeFile);
const readFile = utils.promisify(fs.readFile);

async function readJson() {
    const data = await readFile('./users.json', 'utf-8');
    
    const newData = JSON.parse(data).map((user) => {
            user.hobby = 'football';
            return user;
        })

    console.log(newData);
        
    await writeFile('newUsers.json', JSON.stringify(newData), 'utf-8');
        
}

readJson();