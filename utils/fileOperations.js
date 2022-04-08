const fs = require('fs');

// TODO: Create a function to write README file
const checkForDist = () => {
    const exists = fs.existsSync('./dist');
    if (!exists) {
        fs.mkdir("./dist", err =>{
            if (err) {
                console.log("directory creation failed!");   
            }
        });
        return;
    } else {
        return;
    }
}

const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
        checkForDist();
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