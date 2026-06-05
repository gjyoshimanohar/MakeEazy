const fs = require('fs');

const files = ['src/BlogPage.tsx', 'src/BlogAdminPage.tsx'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/142651/g, '3150A0');
  content = content.replace(/B59451/g, 'f97316'); // f97316 is orange-500
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
}
