import fs from 'fs'
import webp from 'cwebp'
import { exec } from 'child_process'

const FOLDER = "./public/assets/partners"

fs.readdir(FOLDER, (err, files) => {
  files.forEach(file => {
    /*const encoder = new webp.CWebp(`${FOLDER}/${file}`);

    encoder.write(`${FOLDER}/${file.replace(".png", ".webp")}`, function(err) {
      console.log(err || 'encoded successfully');
    });*/


    exec(`cwebp -q 100 ${FOLDER}/${file} -o ${FOLDER}/${file.replace(".png", ".webp")}`, (err, stdout, stderr) => {
      if(err){
        console.error(err)
      }else{
        console.log(stdout)
      }
    })
  });
});