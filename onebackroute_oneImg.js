const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  {
    name: "Is your organisation a subsidiary of another company",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "More information about parent and subsidiary companies",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "9  Nominated individual(s) ",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "Professional body disciplinary proceedings, other investigations, or bars on activity by the Disclosure and Barring Service (DBS",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "Declarations by a health or social care professional ",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "Day-to-day management of regulated activities",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "Disclosure and Barring Service criminal records disclosure ",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "Alternative temporary correspondence address",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: " Previous History as a Registered Person",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: " Temporary Contact Details",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "3.14  Disclosure & Barring Service (DBS)",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: " Partner’s Signature",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "Reference",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "6.1  Purchase or transfer of existing location(s)",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "6.5  Food safety",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "6.11   Condition of registration about the number of persons accommodated to receive nursing or personal care at this location",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "Section 7: How you will provide your service (To be completed by all applicants)",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "*Section 8: Checklist of information that must be available to CQC on request (To be completed by all applicants)",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "Section 10: Supporting notes",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "4.1  Invoice and financial contact details ",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "6.2 Location details",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "6.6  Safety of equipment, plant and utilities ",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "6.12  Condition of registration about not providing nursing care at this location",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
  {
    name: "Section 11: Application declaration ",
    backRoute:
      "/SC1-application-for-registration-as-a-new-provider-of-regulated-activities",
  },
];

const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

const toKebabCase = (str) =>
  str
    .trim()
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

for (const page of pages) {
  const { name } = page;
  let { backRoute } = page;

  if (!name || typeof name !== "string" || !name.trim()) {
    console.log("[SKIP] Invalid or empty page name. Skipping entry.");
    continue;
  }

  const kebabBase = toKebabCase(name);
  const pascalBase = toPascalCase(name);

  // Determine directory name and image index
  let dir = path.join(baseDir, kebabBase);
  let finalKebab = kebabBase;
  let imageIndex = "";
  let dirSuffix = 0;

  while (fs.existsSync(dir) && dirSuffix < 100) {
    dirSuffix++;
    finalKebab = `${kebabBase}-section${dirSuffix}`;
    dir = path.join(baseDir, finalKebab);
    imageIndex = String(dirSuffix);
  }

  if (dirSuffix >= 100) {
    console.log(`[ERROR] Too many duplicates for '${name}'. Skipping.`);
    continue;
  }

  const imageName = `${pascalBase}Image${imageIndex}`;
  const svgFile = `${imageName}.svg`;
  const pascalComponent = `${pascalBase}Page${imageIndex}`;

  if (backRoute && typeof backRoute === "string") {
    backRoute = `/${toKebabCase(backRoute)}`;
  }

  // Create directory
  fs.mkdirSync(dir, { recursive: true });
  console.log(`✅ Created directory: ${dir}`);

  // Write page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ${pascalComponent} = () => {
  return (
    <CommonPage
      pageTitle={\`${name}\`}
      src={${imageName}}
      backRoute="${backRoute}"
    />
  );
};

export default ${pascalComponent};
`;

  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
  console.log(`✅ page.tsx created in: ${dir}`);

  // Write image export
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;

  if (fs.existsSync(indexTsxPath)) {
    const content = fs.readFileSync(indexTsxPath, "utf8");
    if (!content.includes(imageExport.trim())) {
      fs.appendFileSync(indexTsxPath, imageExport);
      console.log(`✅ Export added to index.tsx: ${imageName}`);
    } else {
      console.log(`⚠️ Export for ${imageName} already exists. Skipped.`);
    }
  } else {
    fs.writeFileSync(indexTsxPath, imageExport);
    console.log(`✅ index.tsx created and export written.`);
  }
}

console.log("\n🎉 Page generation complete.");
