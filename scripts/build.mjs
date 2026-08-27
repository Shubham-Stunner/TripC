import {mkdirSync,copyFileSync,readFileSync,writeFileSync,cpSync} from 'node:fs';
mkdirSync('dist/assets',{recursive:true});
copyFileSync('index.html','dist/index.html');
cpSync('src/styles.css','dist/assets/styles.css');
let js=readFileSync('dist/assets/main.js','utf8').replace('./styles.css','./styles.css');
writeFileSync('dist/assets/main.js',js);
writeFileSync('dist/index.html','<div id="app"></div><link rel="stylesheet" href="/assets/styles.css"><script type="module" src="/assets/main.js"></script>');
