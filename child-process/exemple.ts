import { execSync } from 'child_process';

const output = execSync(`node -e "console.error('subprocess stdio output')" `);

console.log(output.toString());
