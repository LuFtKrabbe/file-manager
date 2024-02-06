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
    const handledInput = data.toString().trim();
    const command = (handledInput.indexOf(' ') === -1) ? handledInput : handledInput.slice(0, handledInput.indexOf(' '));
    const handledCommandArgs = handledInput.slice(command.length).trim();

    if (command === 'up') {
      appController.up();
    }
    if (command === 'ls') {
      appController.ls();
    }
    if (command === 'cd') {
      const path = handledCommandArgs;
      appController.cd(path);
    }
    if (command === 'cat') {
      const path = handledCommandArgs;
      appController.cat(path);
    }
    if (command === 'add') {
      const path = handledCommandArgs;
      appController.add(path);
    }
    if (command === 'rm') {
      const path = handledCommandArgs;
      appController.rm(path);
    }
    if (command === 'hash') {
      const path = handledCommandArgs;
      appController.calculateHash(path);
    }
    if (command === 'os') {
      const argument = handledInput.slice(handledInput.lastIndexOf('-') + 1);
      appController.getSystemInfo(argument);
    }
    if (command === 'rn') {
      const pathAndName = handledCommandArgs;
      const path = pathAndName.slice(0, pathAndName.lastIndexOf(' ')).trim();
      const name = pathAndName.slice(pathAndName.lastIndexOf(' ')).trim();
      appController.rn(path, name);
    }
    if (command === 'cp') {
      const pathAndName = handledCommandArgs;
      const path = pathAndName.slice(0, pathAndName.lastIndexOf(' ')).trim();
      const name = pathAndName.slice(pathAndName.lastIndexOf(' ')).trim();
      appController.cp(path, name);
    }
    if (command === 'mv') {
      const pathAndName = handledCommandArgs;
      const path = pathAndName.slice(0, pathAndName.lastIndexOf(' ')).trim();
      const name = pathAndName.slice(pathAndName.lastIndexOf(' ')).trim();
      appController.mv(path, name);
    }
    if (command === 'compress') {
      const pathFileDest = handledCommandArgs;
      const pathToFile = pathFileDest.slice(0, pathFileDest.lastIndexOf(' ')).trim();
      const pathToDest = pathFileDest.slice(pathFileDest.lastIndexOf(' ')).trim();
      appController.compressFile(pathToFile, pathToDest);
    }
    if (command === 'decompress') {
      const pathFileDest = handledCommandArgs;
      const pathToFile = pathFileDest.slice(0, pathFileDest.lastIndexOf(' ')).trim();
      const pathToDest = pathFileDest.slice(pathFileDest.lastIndexOf(' ')).trim();
      appController.decompressFile(pathToFile, pathToDest);
    }
    if (command === '.exit') {
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
