const fs = require('fs');
const path = require('path');

// Define the base directory
const baseDir = path.join(__dirname, 'src', 'app', '(pages)');
const assetsDir = path.join(__dirname, 'src', 'assets');

// List of pages with pageTitle, image counts, and links
const pages = [
  { title: "Functional Skills English Conditions and Requirements", pageTitle: "Functional Skills English Conditions and Requirements", imageCount: 4, links: ["/introduction-functional-skills-mathematics-conditions-and-requirements", "/subject-level-conditions-functional-skills-mathematics-conditions-and-requirements", "/requirements-for-functional-skills-qualifications", "/functional-skills-mathematic-conditions-and-requirements"] },
  { title: "Subject content functional skills: English", pageTitle: "Subject content functional skills: English", imageCount: 3, links: ["/subject-content-functional-skills-mathematic","/requirements-for-functional-skills-two","/functional-skills-english-levels-1-2"] },
  { title: "Functional Skills English Conditions and Requirements Main", pageTitle:" Functional Skills English Conditions and Requirements ", imageCount: 4, links: ["/functional-skills-english-conditions-and-requirements-2024-introduction","/functional-skills-english-conditions-and-requirements-2024-subject-level-conditions","/requirements-for-functional-skills-qualifications-in-english","subject-content-functional-skills-english-main" ] },
  { title: "Subject content functional skills: English Main", pageTitle: "Subject content functional skills: English", imageCount: 4, links: ["/subject-content-fs-english-introduction-purpose","/fs-english-entry-levels-1-to-3","/functional-skills-english-levels-1-2","/appendix","/"] },
];

// Convert to PascalCase
const toPascalCase = str =>
  str
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

// Convert to kebab-case
const toKebabCase = str =>
  str
    .replace(/[&/()]+/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase()
    .replace(/^-+|-+$/g, '');

for (const { title, pageTitle, imageCount = 2, links = [] } of pages) {
  const kebab = toKebabCase(title);
  const pascal = toPascalCase(title.replace(/ & /g, '')); 

  // Create directory for the page
  const dir = path.join(baseDir, kebab);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // Generate arrayData with dynamic image counts and custom links
  const arrayData = [];
  const itemCount = imageCount || 2; // Use imageCount if provided, otherwise default to 2 as specified
  for (let i = 0; i < itemCount; i++) {
    const imageName = `img${i + 1}${pascal}Image`; // Prefix with 'img' to make it a valid identifier
    const svgFile = `${imageName}.svg`;
    const link = links[i] || `/${kebab}/${i + 1}`; // Use custom link if available, otherwise default
    arrayData.push({
      key: `${kebab.split('-')[0]}-${i + 1}`, // Use first part of kebab as key base with index
      link: link,
      icon: imageName,
      title: `${title} Item ${i + 1}`, // Default item title
    });

    // Append to existing index.tsx in assets
    const indexTsxPath = path.join(assetsDir, 'index.tsx');
    const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;
    fs.appendFileSync(indexTsxPath, imageExport);
  }

  // Create page.tsx content
  const pageContent = `"use client";
import { MultiPathPage } from "@/components";
import {
  ${arrayData.map(item => item.icon).join(',\n  ')}
} from "@/assets";
import React from "react";

const ${pascal}PageData = [
  ${arrayData.map(item => `{
    key: "${item.key}",
    link: "${item.link}",
    icon: ${item.icon},
    title: "${item.title}",
  }`).join(',\n  ')}
];

const ${pascal}Page = () => {
  return (
    <MultiPathPage
      arrayData={${pascal}PageData}
      pageTitle="${pageTitle}"
      backRoute="/functional-skills-support"
    />
  );
};

export default ${pascal}Page;
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), pageContent, 'utf8');
}

console.log("Dynamic MultiPath pages with fixed image names, titles, links, and image exports have been created.");