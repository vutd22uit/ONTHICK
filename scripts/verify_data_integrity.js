const fs = require('fs');
const vm = require('vm');

const files = [
    '/Users/vutruongdoan/ONTHICK/ONTHICK/data/cloud-computing.js',
    '/Users/vutruongdoan/ONTHICK/ONTHICK/data/mang-vien-thong.js'
];

files.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');
        // Wrap in a context to avoid global scope pollution and handle 'const' correctly
        // We just want to check for syntax errors
        const script = new vm.Script(content);
        script.runInNewContext({});
        console.log(`PASS: ${file} has valid syntax.`);
    } catch (e) {
        console.error(`FAIL: ${file} has syntax errors:`);
        console.error(e.message);
        process.exit(1);
    }
});

console.log('All files verified successfully.');
