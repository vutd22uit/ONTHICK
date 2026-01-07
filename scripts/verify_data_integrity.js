const fs = require('fs');
const vm = require('vm');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const filesToCheck = [
    { path: 'data/cloud-computing.js', expectedVar: 'cloudQuestions' },
    { path: 'data/mang-vien-thong.js', expectedVar: 'networkQuestions' },
    { path: 'data/security-cloud.js', expectedVars: ['securityCh1Questions', 'securityCh2Questions', 'securityCh3Questions', 'securityCh4Questions'] },
    { path: 'data/cloud-exams.js', expectedVar: 'cloudExams' }
];

let hasError = false;

// Create a shared context to simulate browser environment where scripts are loaded sequentially
const context = vm.createContext({});

filesToCheck.forEach(fileInfo => {
    const filePath = path.join(projectRoot, fileInfo.path);
    if (!fs.existsSync(filePath)) {
        console.error(`FAIL: File not found: ${fileInfo.path}`);
        hasError = true;
        return;
    }

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const script = new vm.Script(content);
        script.runInContext(context);
        console.log(`PASS: Syntax check OK for ${fileInfo.path}`);

        // Check availability of expected variables in the context
        const vars = fileInfo.expectedVars ? fileInfo.expectedVars : [fileInfo.expectedVar];
        vars.forEach(varName => {
            try {
                // Try to access the variable by evaluating its name in the context
                const result = vm.runInContext(varName, context);
                if (result === undefined) {
                    console.error(`FAIL: Variable '${varName}' is undefined in ${fileInfo.path}`);
                    hasError = true;
                } else {
                    const count = Array.isArray(result) ? result.length : 'N/A';
                    console.log(`PASS: Variable '${varName}' found (Items: ${count})`);
                }
            } catch (err) {
                console.error(`FAIL: Variable '${varName}' is not defined in ${fileInfo.path}`);
                hasError = true;
            }
        });

    } catch (e) {
        console.error(`FAIL: Syntax error in ${fileInfo.path}:`);
        console.error(e.message);
        hasError = true;
    }
});

if (hasError) {
    console.error('\nData integrity check FAILED.');
    process.exit(1);
} else {
    console.log('\nAll data files verified successfully.');
}
