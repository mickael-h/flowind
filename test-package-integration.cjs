const fs = require('fs');
const path = require('path');

console.log('🧪 Testing flowind-design-system package...\n');

// Test 1: Check if build files exist
console.log('1. Checking build files...');
const requiredFiles = [
  'dist/index.js',
  'dist/styles/index.js',
  'package.json',
  'src/lib/components/ui/index.d.ts',
  'README.md'
];

let allFilesExist = true;
requiredFiles.forEach((file) => {
  const exists = fs.existsSync(file);
  console.log(`   ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

if (!allFilesExist) {
  console.log('\n❌ Some required files are missing!');
  process.exit(1);
}

// Test 2: Check package.json structure
console.log('\n2. Validating package.json...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const requiredFields = [
  'name',
  'version',
  'description',
  'main',
  'module',
  'types',
  'exports',
  'files'
];

let packageValid = true;
requiredFields.forEach((field) => {
  const hasField = packageJson.hasOwnProperty(field);
  console.log(`   ${hasField ? '✅' : '❌'} ${field}`);
  if (!hasField) packageValid = false;
});

// Test 3: Check exports configuration
console.log('\n3. Validating exports configuration...');
const packageExports = packageJson.exports;
if (packageExports) {
  console.log('   ✅ exports field exists');
  console.log(`   ✅ main: ${packageExports['.']?.import || 'missing'}`);
  console.log(`   ✅ types: ${packageExports['.']?.types || 'missing'}`);
  console.log(`   ✅ styles: ${packageExports['./styles']?.import || 'missing'}`);
} else {
  console.log('   ❌ exports field missing');
  packageValid = false;
}

// Test 4: Check peer dependencies
console.log('\n4. Validating peer dependencies...');
const peerDeps = packageJson.peerDependencies;
if (peerDeps) {
  console.log('   ✅ peerDependencies exists');
  console.log(`   ✅ svelte: ${peerDeps.svelte || 'missing'}`);
  console.log(`   ✅ flowbite-svelte: ${peerDeps['flowbite-svelte'] || 'missing'}`);
  console.log(`   ✅ tailwindcss: ${peerDeps.tailwindcss || 'missing'}`);
} else {
  console.log('   ❌ peerDependencies missing');
  packageValid = false;
}

// Test 5: Check TypeScript declarations
console.log('\n5. Validating TypeScript declarations...');
const typeDeclarations = fs.readFileSync('src/lib/components/ui/index.d.ts', 'utf8');
const requiredTypes = [
  'Button',
  'Card',
  'Input',
  'Badge',
  'Text',
  'Form',
  'Tabs',
  'Accordion',
  'Modal',
  'Table'
];

let typesValid = true;
requiredTypes.forEach((type) => {
  const hasType = typeDeclarations.includes(
    `export declare const ${type}: typeof SvelteComponent;`
  );
  console.log(`   ${hasType ? '✅' : '❌'} ${type} type declaration`);
  if (!hasType) typesValid = false;
});

// Test 6: Check bundle size
console.log('\n6. Checking bundle sizes...');
const indexJsSize = fs.statSync('dist/index.js').size;
const stylesSize = fs.statSync('dist/styles/index.js').size;

console.log(`   📦 Components bundle: ${(indexJsSize / 1024).toFixed(2)} KB`);
console.log(`   🎨 Styles bundle: ${(stylesSize / 1024).toFixed(2)} KB`);

// Test 7: Validate .npmignore
console.log('\n7. Checking .npmignore...');
if (fs.existsSync('.npmignore')) {
  const npmignore = fs.readFileSync('.npmignore', 'utf8');
  const requiredExclusions = ['src/routes/', 'src/stories/', 'vite.config.ts'];

  let npmignoreValid = true;
  requiredExclusions.forEach((exclusion) => {
    const hasExclusion = npmignore.includes(exclusion);
    console.log(`   ${hasExclusion ? '✅' : '❌'} excludes ${exclusion}`);
    if (!hasExclusion) npmignoreValid = false;
  });

  if (!npmignoreValid) {
    console.log('   ⚠️  Some required exclusions are missing');
  }
} else {
  console.log('   ❌ .npmignore file missing');
}

// Test 8: Check for inline Tailwind classes in components
console.log('\n8. Checking for inline Tailwind classes...');
const componentFiles = [
  'src/lib/components/ui/Button.svelte',
  'src/lib/components/ui/Card.svelte',
  'src/lib/components/ui/Input.svelte',
  'src/lib/components/ui/Badge.svelte',
  'src/lib/components/ui/Text.svelte',
  'src/lib/components/ui/Form.svelte',
  'src/lib/components/ui/Tabs.svelte',
  'src/lib/components/ui/Accordion.svelte',
  'src/lib/components/ui/Modal.svelte',
  'src/lib/components/ui/Table.svelte'
];

let noInlineClasses = true;
componentFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    // Check for actual inline Tailwind classes (not using style objects)
    const hasInlineClasses =
      content.includes('class="') &&
      (content.includes('class="bg-') ||
        content.includes('class="text-') ||
        content.includes('class="border-') ||
        content.includes('class="p-') ||
        content.includes('class="m-') ||
        content.includes('class="w-') ||
        content.includes('class="h-') ||
        content.includes('class="flex') ||
        content.includes('class="grid'));
    console.log(`   ${!hasInlineClasses ? '✅' : '❌'} ${path.basename(file)}`);
    if (hasInlineClasses) noInlineClasses = false;
  }
});

// Summary
console.log('\n📊 Test Summary:');
console.log(`   Build files: ${allFilesExist ? '✅' : '❌'}`);
console.log(`   Package.json: ${packageValid ? '✅' : '❌'}`);
console.log(`   TypeScript types: ${typesValid ? '✅' : '❌'}`);
console.log(`   No inline classes: ${noInlineClasses ? '✅' : '❌'}`);

const allTestsPassed = allFilesExist && packageValid && typesValid && noInlineClasses;

if (allTestsPassed) {
  console.log('\n🎉 All tests passed! Package is ready for publishing.');
  console.log('\n📋 Next steps:');
  console.log('   1. npm pack (to create a test tarball)');
  console.log('   2. npm publish (to publish to npm)');
  console.log('   3. Test in a real Svelte project');
} else {
  console.log('\n❌ Some tests failed. Please fix the issues before publishing.');
  process.exit(1);
}
