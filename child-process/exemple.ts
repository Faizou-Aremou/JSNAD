import { execSync } from 'child_process';

// const cmd = process.platform === 'win32' ? 'dir' : 'ls';
// const output = execSync(cmd);
// console.log(output.toString());

// const output2 = execSync(
//   `${process.execPath} -e "console.error('subprocess stdio output')"`
// );
// console.log(output2.toString());


try {
  execSync(`${process.execPath} -e "throw Error('kaboom')"`)
} catch (err) {
  console.error('CAUGHT ERROR:', err)
}