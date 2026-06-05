const fs = require('fs');
const path = require('path');

const excludeHashes = ['home', 'about-us', 'services', 'testimonials', 'faq', 'contact-us'];

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

      // Fix `href: '#hash'` inside objects
      const regex1 = /href:\s*'#([\w-]+)'/g;
      content = content.replace(regex1, (match, hashValue) => {
        changed = true;
        if (excludeHashes.includes(hashValue)) {
          return `href: '/#${hashValue}'`;
        }
        return `href: '/${hashValue}'`;
      });
      
      // Fix `<a href="#hash">`
      const regex2 = /href="(#[\w-]+)"/g;
      content = content.replace(regex2, (match, hashValueWithHash) => {
        const val = hashValueWithHash.replace('#', '');
        if (excludeHashes.includes(val)) {
          changed = true;
          return `href="/#${val}"`;
        }
        return match; // others were replaced to `href="/startup"` earlier
      });

      // Special link check `<a href="#">` we previously replaced with href="/"
      // Wait we already replaced them to `/` so it's fine.

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed:', fullPath);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Done fixing object hrefs.');
