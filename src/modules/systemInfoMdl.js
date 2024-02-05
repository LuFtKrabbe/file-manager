import { EOL, cpus, homedir, userInfo, arch } from 'node:os'

const systemInfoMdl = (argument) => {
  if (argument === 'EOL') {
    process.stdout.write(`End-Of-Line: ${JSON.stringify(EOL)}`);
    process.stdout.write(EOL);
  }

  if (argument === 'cpus') {
    const cpuArr = cpus();
    const cpuTable = cpuArr.map((cpu, i) => (
      {Number: i + 1, ['Model']: cpu.model, ['Speed, GHz']: cpu.speed}
    ))
    const cpuTableTransformed = cpuTable.reduce((acc, {Number, ...x}) => { acc[Number] = x; return acc }, {});
    console.table(cpuTableTransformed);
    process.stdout.write(EOL);
  }

  if (argument === 'homedir') {
    process.stdout.write(`Home directory: ${homedir()}`);
    process.stdout.write(EOL);
  }

  if (argument === 'username') {
    const username = userInfo().username;
    process.stdout.write(`System user name: ${username}`);
    process.stdout.write(EOL);
  }

  if (argument === 'architecture') {
    process.stdout.write(`Architecture: ${arch()}`);
    process.stdout.write(EOL);
  }
};

export default systemInfoMdl;
