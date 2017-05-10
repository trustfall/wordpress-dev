const path = require('path');
const colors = require('colors');
const fs = require('fs-extra');
const unzip = require('unzip-stream');

const project = process.env.npm_config_project.toString();

console.log(colors.green('docker images downloaded, unpacked, and linked...'));
console.log(colors.cyan('unzipping theme and plugins...'));

fs.createReadStream(path.join(__dirname, project,'advanced-custom-fields-pro.zip'))
  .pipe(unzip.Extract({ path: path.join(__dirname, project, 'wp-content/plugins/') }))
  .on('error', (err) => {
    console.log(err);
  })
  .on('finish', () => {
    fs.removeSync(path.join(__dirname, project,'advanced-custom-fields-pro.zip'));

    fs.createReadStream(path.join(__dirname, project,'starter-theme-master.zip'))
      .pipe(unzip.Extract({ path: path.join(__dirname, project, 'wp-content/themes/') }))
      .on('error', (err) => {
        console.log(err);
      })
      .on('finish', () => {
        fs.removeSync(path.join(__dirname, project,'starter-theme-master.zip'));

        fs.createReadStream(path.join(__dirname, project,'timber-library.1.2.4.zip'))
          .pipe(unzip.Extract({ path: path.join(__dirname, project, 'wp-content/plugins/') }))
          .on('error', (err) => {
            console.log(err);
          })
          .on('finish', () => {
            fs.removeSync(path.join(__dirname, project,'timber-library.1.2.4.zip'));
            console.log(colors.green('themes and plugins unzipped...'));
          });
      });
  });
