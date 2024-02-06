import { Console } from 'node:console';
import { EOL, cpus, homedir, userInfo, arch } from 'node:os'

const systemInfoMdl = (argument) => {
  switch(argument) {
    case 'EOL':
      process.stdout.write(`End-Of-Line: ${JSON.stringify(EOL)}`);
      process.stdout.write(EOL);
    break;

    case 'cpus':
      const cpuArr = cpus();
      const cpuTable = cpuArr.map((cpu, i) => (
        {Number: i + 1, ['Model']: cpu.model, ['Speed, GHz']: cpu.speed}
      ))
      const cpuTableTransformed = cpuTable.reduce((acc, {Number, ...x}) => { acc[Number] = x; return acc }, {});
      console.table(cpuTableTransformed);
      process.stdout.write(EOL);
    break;

    case 'homedir':
      process.stdout.write(`Home directory: ${homedir()}`);
      process.stdout.write(EOL);
    break;

    case 'username':
      const username = userInfo().username;
      process.stdout.write(`System user name: ${username}`);
      process.stdout.write(EOL);
    break;

    case 'architecture':
      process.stdout.write(`Architecture: ${arch()}`);
      process.stdout.write(EOL);
    break;
    
    default:
    console.log('Input correct argument!');
  }
};

export default systemInfoMdl;
