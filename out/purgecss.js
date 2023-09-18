// purgecss.js
const PurgeCSS = require("purgecss").default;
const purgeCSSResults = await new PurgeCSS().purge(require("./purgecss.config.js"));

// You can log the results or perform other actions as needed
console.log(purgeCSSResults[0].css);
