const fs = require('fs');

const startupContent = fs.readFileSync('src/StartupPage.tsx', 'utf8');

const updatedStartupContent = startupContent.replace(
  /onClick=\{\(\) \=\> \{\s*if \(model\.title \=\=\= \"Sole Proprietorship\"\) \{\s*window\.location\.hash \= \"\#sole\-proprietorship\"\;.*?\}\s*\}\s*\}/s,
  `onClick={(e) => {
    const paths = {
      "Sole Proprietorship": "/sole-proprietorship",
      "Partnership Firm": "/partnership-firm",
      "Limited Liability Partnership": "/limited-liability-partnership",
      "One Person Company": "/one-person-company",
      "Private Limited Company": "/private-limited-company",
      "Public Limited Company": "/public-limited-company",
      "Section 8 Company": "/section-8-company",
      "Trust or Society": "/trust-or-society",
      "Branch Office or Subsidiary of Foreign Company": "/foreign-company"
    };
    if (paths[model.title as keyof typeof paths]) {
      window.location.href = paths[model.title as keyof typeof paths];
    }
  }}`
);

fs.writeFileSync('src/StartupPage.tsx', updatedStartupContent);

const filesToFix = [
  'src/IncomeTaxCalculator.tsx',
  'src/GstLateFeeCalculator.tsx',
  'src/HraCalculator.tsx',
  'src/TdsInterestCalculator.tsx',
  'src/TermsPage.tsx',
  'src/TdsLateFeeCalculator.tsx',
  'src/PrivacyPolicy.tsx',
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const updated = content.replace(/onClick=\{\(\) \=\> window\.location\.hash \= '\#'\}/g, "onClick={() => window.location.href = '/'}");
    fs.writeFileSync(file, updated);
  }
});
console.log('Fixed window.location.hash issues');
