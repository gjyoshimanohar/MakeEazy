const fs = require('fs');

const { join } = require('path');

const otherPagePath = join('src', 'OtherRegistrationPage.tsx');
let otherPage = fs.readFileSync(otherPagePath, 'utf8');

otherPage = otherPage.replace(
/reg\.title \=\=\= \"Trade Mark\" \? \"\#trademark\-registration\" \:/g,
`reg.title === "Trade Mark" ? "/trademark-registration" :`
).replace(
/reg\.title \=\=\= \"Legal Entity Identification\" \? \"\#lei\-registration\" \:/g,
`reg.title === "Legal Entity Identification" ? "/lei-registration" :`
).replace(
/reg\.title \=\=\= \"Professional Tax\" \? \"\#professional\-tax\-registration\" \:/g,
`reg.title === "Professional Tax" ? "/professional-tax-registration" :`
).replace(
/reg\.title \=\=\= \"Shop \& Establishment\" \? \"\#shop\-establishment\-registration\" \:/g,
`reg.title === "Shop & Establishment" ? "/shop-establishment-registration" :`
).replace(
/reg\.title \=\=\= \"Trade License\" \? \"\#trade\-license\-registration\" \:/g,
`reg.title === "Trade License" ? "/trade-license-registration" :`
).replace(
/reg\.title \=\=\= \"FSSAI License\" \? \"\#fssai\-license\-registration\" \:/g,
`reg.title === "FSSAI License" ? "/fssai-license-registration" :`
).replace(
/\"\#under\-construction\"/g,
`"/under-construction"`
);

fs.writeFileSync(otherPagePath, otherPage);

console.log("Fixed OtherRegistrationPage.tsx");
