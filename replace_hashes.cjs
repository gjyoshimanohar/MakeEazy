const fs = require('fs');
const path = require('path');

const excludeHashes = ['#home', '#about-us', '#services', '#testimonials', '#faq', '#contact-us'];

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
      
      const hrefRegex = /href="(#[\w-]+)"/g;
      content = content.replace(hrefRegex, (match, hashValue) => {
        changed = true;
        if (excludeHashes.includes(hashValue)) {
          return `href="/${hashValue}"`; 
        }
        return `href="${hashValue.replace('#', '/')}"`;
      });
      // also replace <a href="#"> (some components have this)
      if (content.includes('href="#"')) {
        content = content.replace(/href="#"/g, 'href="/"');
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated:', fullPath);
      }
    }
  }
}


replaceInDir(path.join(__dirname, 'src'));
console.log('Replacement done.');
