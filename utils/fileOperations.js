const fs = require('fs');

// TODO: Create a function to write README file
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err=> {
            if (err) {
                reject(err);
            } else {
                resolve({
                    ok: true,
                    message: 'README file created!'
                })
            }
        })
    });
}

module.exports = {writeToFile};