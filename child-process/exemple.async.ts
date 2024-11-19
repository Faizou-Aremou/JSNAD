import { exec } from 'child_process';

const output = exec(
  `${process.execPath} -e "console.log('A'); throw Error('B')"`,
  (err, stdout, stderr) => {
    console.log('err', err);
    console.log('subprocess stdout: ', stdout.toString());
    console.log('subprocess stderr: ', stderr.toString());
  }
);

const sp = exec(
  `"${process.execPath}" -e "console.log('subprocess stdio output')"`
)

console.log('pid is', sp.pid)
sp.stdout?.pipe(process.stdout)

sp.on('close', (status) => {
  console.log('exit status was', status)
})