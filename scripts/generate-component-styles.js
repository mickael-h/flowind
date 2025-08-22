import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to compile TypeScript file to JavaScript temporarily
function compileTypeScriptFile(filePath) {
  try {
    // Use tsx to execute TypeScript files directly
    const result = execSync(
      `npx tsx --eval "import('${filePath}').then(m => console.log(JSON.stringify(m)))"`,
      {
        encoding: 'utf8',
        cwd: process.cwd()
      }
    );

    // Parse the JSON output
    const moduleExports = JSON.parse(result.trim());
    return moduleExports;
  } catch (error) {
    console.warn(`Failed to compile ${filePath}:`, error.message);
    return null;
  }
}

// Function to extract CSS classes from style objects
function extractCSSClasses(styleObj, prefix = '') {
  const classes = [];

  for (const [key, value] of Object.entries(styleObj)) {
    if (typeof value === 'string') {
      // Convert the style string to a CSS class
      const className = prefix ? `${prefix}-${key}` : key;
      classes.push(`.${className} { @apply ${value}; }`);
    } else if (typeof value === 'object' && value !== null) {
      // Recursively process nested objects
      const nestedPrefix = prefix ? `${prefix}-${key}` : key;
      classes.push(...extractCSSClasses(value, nestedPrefix));
    }
  }

  return classes;
}

// Import all style modules
async function generateComponentStyles() {
  const stylesDir = path.join(process.cwd(), 'src/lib/styles');
  const outputFile = path.join(process.cwd(), 'src/lib/styles/components.css');

  // Dynamically discover all style files
  const styleFiles = fs
    .readdirSync(stylesDir)
    .filter((file) => file.endsWith('.style.ts') || file.endsWith('.style.js'))
    .filter((file) => !file.endsWith('.d.ts')); // Exclude type definition files

  let allClasses = [];

  for (const fileName of styleFiles) {
    try {
      const fullPath = path.join(stylesDir, fileName);
      let styleObj;

      if (fileName.endsWith('.ts')) {
        // Handle TypeScript files
        const moduleExports = compileTypeScriptFile(fullPath);
        if (moduleExports) {
          // Find the main style object (usually the first export)
          styleObj = moduleExports.default || Object.values(moduleExports)[0];
        } else {
          continue;
        }
      } else {
        // Handle JavaScript files
        const module = await import(fullPath);
        styleObj = module.default || Object.values(module)[0];
      }

      // Extract component name from filename
      const componentName = path.basename(fileName, path.extname(fileName)).replace('.style', '');

      // Extract CSS classes
      const classes = extractCSSClasses(styleObj, componentName);
      allClasses.push(`/* ${componentName} styles */`);
      allClasses.push(...classes);
      allClasses.push('');

      console.log(`✅ Processed: ${fileName}`);
    } catch (error) {
      console.warn(`⚠️  Warning: Could not process ${fileName}:`, error.message);
    }
  }

  // Generate the CSS content
  const cssContent = `/* Auto-generated component styles */
@layer components {
${allClasses.join('\n')}
}`;

  // Write to file
  fs.writeFileSync(outputFile, cssContent);
  console.log(`✅ Generated component styles: ${outputFile}`);
}

generateComponentStyles().catch(console.error);
