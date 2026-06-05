const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const initial = content;

      content = content.replace(/href="#"/g, 'href="/"');
      content = content.replace(/href="#([\w-]+)"/g, 'href="/$1"');
      content = content.replace(/href=\{"#([\w-]+)"\}/g, 'href="/$1"');
      content = content.replace(/href=\{"#"\}/g, 'href="/"');
      
      if (initial !== content) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed', fullPath);
      }
    }
  }
}

processDir(path.join(process.cwd(), 'src'));
