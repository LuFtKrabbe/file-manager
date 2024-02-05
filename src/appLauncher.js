import { EOL, homedir } from 'node:os'
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AppController } from './appController.js';

const appLaunch = () => {
  const appController = new AppController();

  const filePath = fileURLToPath(import.meta.url);
  const dirPath = dirname(filePath);

  const cliArgs = process.argv;
  const defaultUsername = 'Username';
  let username = defaultUsername;
  let currentPath = homedir();

  cliArgs.map((args) => {
    if (args.includes('--username=')) {
      username = args.slice(args.indexOf('=') + 1).trim();
    }
  })

  const greetingMsg = `Welcome to the File Manager, ${username || defaultUsername}!`;
  const farewellMsg = `Thank you for using File Manager, ${username || defaultUsername}, goodbye!`;

  process.stdout.write(`${greetingMsg}${EOL}`);
  process.stdout.write(`You are currently in ${currentPath}${EOL}`);

  process.stdin.on('data', data => {
    if (data.toString().trim() === 'up') {
      appController.up();
    }
    if (data.toString().trim().slice(0, 2) === 'cd') {
      const path = data.toString().trim().slice(2).trim();
      appController.cd(path);
    }
    if (data.toString().trim().slice(0, 2) === 'ls') {
      appController.ls();
    }
    if (data.toString().trim().slice(0, 3) === 'cat') {
      const path = data.toString().trim().slice(3).trim();
      appController.cat(path);
    }
    if (data.toString().trim().slice(0, 3) === 'add') {
      const path = data.toString().trim().slice(3).trim();
      appController.add(path);
    }
    if (data.toString().trim().slice(0, 2) === 'rn') {
      const pathAndName = data.toString().trim().slice(2).trim();
      const path = pathAndName.slice(0, pathAndName.lastIndexOf(' ')).trim();
      const name = pathAndName.slice(pathAndName.lastIndexOf(' ')).trim();
      appController.rn(path, name);
    }
    if (data.toString().trim().slice(0, 2) === 'rm') {
      const path = data.toString().trim().slice(2).trim();
      appController.rm(path);
    }
    if (data.toString().trim().slice(0, 2) === 'cp') {
      const pathAndName = data.toString().trim().slice(2).trim();
      const path = pathAndName.slice(0, pathAndName.lastIndexOf(' ')).trim();
      const name = pathAndName.slice(pathAndName.lastIndexOf(' ')).trim();
      appController.cp(path, name);
    }
    if (data.toString().trim().slice(0, 2) === 'mv') {
      const pathAndName = data.toString().trim().slice(2).trim();
      const path = pathAndName.slice(0, pathAndName.lastIndexOf(' ')).trim();
      const name = pathAndName.slice(pathAndName.lastIndexOf(' ')).trim();
      appController.mv(path, name);
    }
    if (data.toString().trim().slice(0, 2) === 'os') {
      const argument = data.toString().trim().slice(2).trim().slice(2);
      appController.getSystemInfo(argument);
    }
    if (data.toString().trim().slice(0, 4) === 'hash') {
      const path = data.toString().trim().slice(4).trim();
      appController.calculateHash(path);
    }
    if (data.toString().trim() === '.exit') {
      process.emit('close', data);
    }
  });

  process.on('SIGINT', () => {
    process.emit('close', '');
  })

  process.on('close', (data) => {
    process.stdout.write(`${data}${EOL}`);
    process.stdout.write(`${farewellMsg}${EOL}`);
    process.exit();
  });
};

export default appLaunch;