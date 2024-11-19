import { spawnSync, spawn } from 'child_process';

const result = spawnSync(process.execPath, [
  '-e',
  `console.log('subprocess stdio output')`,
]);

console.log(result);
const sp = spawn(
  process.execPath,
  [`-e`, `process.exit(1)`]
)
console.log('pid is', sp.pid);

sp.stdout.pipe(process.stdout)

sp.on('close', (status) => {
  console.log('exit status was', status)
})