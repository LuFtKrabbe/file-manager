import { homedir, EOL } from 'node:os'
import appLaunch from './appLauncher.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import list from './modules/list.js';


export class AppController {
  constructor() {
    this.currentPath = homedir();
  }

  up() {
    this.currentPath = this.currentPath.slice(0, this.currentPath.lastIndexOf('/'));
    this.showPath();
  }

  cd(path) {
    this.currentPath = this.currentPath + '/' + path;
    console.log(this.currentPath);
    this.showPath();
  }

  ls() {
    list(this.currentPath);
    this.showPath(this.currentPath);
  }

  showPath() {
    process.stdout.write(`You are currently in ${this.currentPath}${EOL}`);
  }
}