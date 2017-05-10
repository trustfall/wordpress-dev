const path = require('path');
const colors = require('colors');
const fs = require('fs-extra');
const unzip = require('unzip-stream');

if (!process.env.npm_config_project) {
  console.log(colors.red('ERROR - project name not specified (npm run build-wp --project="project-name")'));
} else {
  const project = process.env.npm_config_project.toString();
  console.log(colors.magenta('Project Name: ') + project);

  if (fs.existsSync(path.join(__dirname, project))) {
    console.log(colors.red('ERROR- current project directory already exists.'));
    process.exit();
  } else {
    fs.mkdirSync(project);

    const stream = fs.createReadStream(path.join(__dirname, 'package.zip'));
    stream.pipe(unzip.Extract({ path: path.join(__dirname, project) }));
    stream.on('finish', () => {
      console.log(colors.green('package unzipped...'));
      console.log(colors.cyan('starting docker process...'));
      process.exit();
    })
  }
}

