const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let changed = false;
      const initial = content;

      content = content.replace(/href="\/\#([\w-]+)"/g, 'href="/$1"');
      content = content.replace(/href:\s*'\/\#([\w-]+)'/g, 'href: \'/$1\'');
      content = content.replace(/href="#([\w-]+)"/g, 'href="/$1"');
      content = content.replace(/href=\{"\#([\w-]+)"\}/g, 'href="/$1"');

      if (content !== initial) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed clean hashes:', fullPath);
      }
    }
  }
}

replaceInDir(path.join(process.cwd(), 'src'));
