const fs = require('fs');

const checkForDist = () => {
    const exists = fs.existsSync('./dist');
    if (!exists) {
        fs.mkdir("./dist", err =>{
            err ? console.log("directory creation failed!") : console.log("directory creation succeeded")
        });
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
                    message: 'README file created! Check it out in the dist folder!'
                })
            }
        })
    });
}

module.exports = {writeToFile, checkForDist};