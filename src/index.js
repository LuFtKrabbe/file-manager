import os from 'node:os'

const appLaunch = () => {
  const cliArgs = process.argv;
  const defaultUsername = 'Username';
  let username = defaultUsername;

  cliArgs.map((args) => {
    if (args.includes('--username=')) {
      username = args.slice(args.indexOf('=') + 1).trim();
    }
  })

  const greetingMsg = `Welcome to the File Manager, ${username || defaultUsername}!`;
  const farewellMsg = `Thank you for using File Manager, ${username || defaultUsername}, goodbye!`;

  process.stdout.write(greetingMsg);
  process.stdout.write(os.EOL);

  process.stdin.on('data', data => {
    if (data.toString().trim() === '.exit') {    
      process.emit('close', data);
    }
  });

  process.on('SIGINT', () => {
    process.emit('close', '');
  })


  process.on('close', (data) => {
    process.stdout.write(`${data}${os.EOL}`);
    process.stdout.write(`${farewellMsg}${os.EOL}`);
    process.exit();
  });
};

appLaunch();