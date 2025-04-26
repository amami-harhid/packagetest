const fs = require('fs');
const {glob} = require('glob');
const { execSync } = require('child_process');

const entries = glob.sync('./src/**/index.html');
const absolutePath = fs.realpathSync('./');
const dirArr = [];
try{
    for(const _entry of entries){
        const directory = _entry.replace('src\\','').replace(/\\index.html$/,'');
        dirArr.push(directory);
    }
    dirArr.sort();
    for(const _dir of dirArr){
        console.log(`_dir=${_dir}`);
        const npxParcel = `npx parcel build ./src/${_dir}/index.html --public-url ./ --dist-dir ./build/${_dir}`
        execSync(npxParcel);
    }
    
}catch(e){
    throw e;
}
