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