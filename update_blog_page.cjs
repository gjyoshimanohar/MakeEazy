const fs = require('fs');
const content = fs.readFileSync('src/BlogPage.tsx', 'utf8');

let newContent = content.replace(/const \[selectedPost, setSelectedPost\] = useState<BlogPost \| null>\(null\);\n?/, '');

// Replace the Read Guide button
newContent = newContent.replace(
`<button
                      onClick={() => setSelectedPost(blog)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#3150A0] hover:text-orange-500 hover:translate-x-0.5 transition-all cursor-pointer"
                    >
                      Read Guide
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </button>`,
`<a
                      href={\`/blog/\${blog.slug}\`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#3150A0] hover:text-orange-500 hover:translate-x-0.5 transition-all cursor-pointer"
                    >
                      Read Guide
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </a>`
);

// We need to remove the whole AnimatePresence thing at the bottom.
const splitTag = '{/* Immersive Article Full-Screen Drawer Reader */}';
const parts = newContent.split(splitTag);
if (parts.length > 1) {
    let topPart = parts[0];
    const rest = parts[1];
    
    // We expect the file to end with:
    // </div>
    // );
    // }
    
    newContent = topPart + `
    </div>
  );
}
`;
} else {
  console.log("Could not find drawer comment");
}

fs.writeFileSync('src/BlogPage.tsx', newContent);
console.log('Done');
