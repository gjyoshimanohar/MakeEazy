const fs = require('fs');
const path = require('path');
function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      walk(file);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, i) => {
          if (line.includes('$') && !line.includes('$' + '{') && !line.includes('eslint-disable')) {
            console.log(file + ':' + (i+1) + ': ' + line.trim());
          }
        });
      }
    }
  });
}
walk('src');
