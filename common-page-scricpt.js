const fs = require("fs");
const path = require("path");

// Define the base directory
const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");

// List of pages to create
const pages = [
  "Apprenticeship funding rules 2024 to 2025_ summary of changes",
  "Functional_Skills_English_Conditions_and_Requirements_2024 / Introduction",
  "Requirements for Functional Skills  qualifications in English",
  "Functional_Skills_English_Conditions_and_Requirements_2024 / Subject Level Conditions",
  "Subject content  FS:  English_Introduction & Purpose",
  "Glossary for use with this Subject Content",
  "FS  English – Entry Levels 1 to 3",
  "Functional Skills English – Levels 1 & 2",
  "Appendix",
  "functional-skills-criteria-for-ict",
  "Table 1 : Expectations for Word Reading – Entry Levels 1 to 4",
  "Table 2: Entry Level 1 – Expectations for Reading and Spelling",
  "Table 3: Entry Level 2 – Expectations for Reading and Spelling",
  "Table 4:Entry Level 3 – Expectations for Reading and Spelling",
  "Introduction Functional Skills mathematics Conditions and Requirements",
  '"Subject Level Conditions" Functional Skills mathematics Conditions and Requirements',
  '"Requirements for Functional Skills  qualifications in Mathematics "Functional Skills mathematics Conditions and Requirements',
  "Subject content  functional skills:  Mathematic",
  '"Requirements for Functional Skills  qualifications in Mathematics "Functional Skills mathematics Conditions and Requirements',
  "Functional Skills Mathematics - Levels 1 and 2",
];
// Convert to PascalCase
const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

// Convert to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

for (const title of pages) {
  const kebab = toKebabCase(title);
  const pascal = toPascalCase(title);
  const imageName = `${pascal}Image`;
  const svgFile = `${imageName}.svg`;

  // Create directory for the page
  const dir = path.join(baseDir, kebab);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // Create page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ${pascal}Page = () => {
  return (
    <CommonPage
      pageTitle={\`Apprenticeships / Apprenticeship funding Rules / ${title}\`}
      src={${imageName}}
      backRoute="/apprenticeship-funding-rules"
    />
  );
};

export default ${pascal}Page;
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");

  // Append to existing index.tsx in assets
  const indexTsxPath = path.join(assetsDir, "index.tsx");
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;
  fs.appendFileSync(indexTsxPath, imageExport);
}

console.log("Pages and image exports have been created.");
