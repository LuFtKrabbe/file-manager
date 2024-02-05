import { homedir, EOL, platform } from 'node:os'
import { resolve } from 'node:path'
import listDirFilesMdl from './modules/listDirFilesMdl.js';
import readFileMdl from './modules/readFileMdl.js';
import createFileMdl from './modules/createFileMdl.js';
import renameFileMdl from './modules/renameFileMdl.js';
import deleteFileMdl from './modules/deleteFileMdl.js';
import copyFileMdl from './modules/copyFileMdl.js';
import systemInfoMdl from './modules/systemInfoMdl.js';
import calcHashFileMdl from './modules/calcHashFileMdl.js';
import compressFileMdl from './modules/compressFileMdl.js';
import decompressFileMdl from './modules/decompressFileMdl.js';
import { stat } from 'node:fs/promises';

export class AppController {
  constructor() {
    this.currentPath = homedir();
    this.platform = platform();
    this.separator = (platform() === 'win32') ? '\\' : '/';
  }

  up() {
    const firstSeparator = this.currentPath.indexOf(`${this.separator}`);
    const lastSeparator = this.currentPath.lastIndexOf(`${this.separator}`);
    if (firstSeparator === lastSeparator) {
      this.currentPath = this.currentPath.slice(0, lastSeparator + 1);
    } else {
      this.currentPath = this.currentPath.slice(0, lastSeparator);
    }
    this.showPath();
  }

  async cd(path) {
    const resolvedPath = resolve(this.currentPath, path);

    try {
      const fileStat = await stat(resolvedPath);
      if (fileStat.isDirectory()) {
        this.currentPath = resolvedPath;
      } else {
        throw new Error();
      }
    } catch {
      console.log('--------------------------------');
      console.log('|   Wrong path to directory!   |')
      console.log('--------------------------------');
    }
    this.showPath();
  }

  async ls() {
    await listDirFilesMdl(this.currentPath);
    this.showPath(this.currentPath);
  }

  cat(path) {
    const pathToReadFile = this.currentPath + '/' + path;
    readFileMdl(pathToReadFile);
    this.showPath(this.currentPath);
  }

  add(path) {
    const pathToReadFile = this.currentPath + '/' + path;
    createFileMdl(pathToReadFile);
    this.showPath(this.currentPath);
  }

  rn(path, newFileName) {
    const pathToFile = this.currentPath + '/' + path;
    renameFileMdl(pathToFile, newFileName);
    this.showPath(this.currentPath);
  }

  cp(pathToFile, newDirName) {
    const pathToFileFull = this.currentPath + '/' + pathToFile;
    copyFileMdl(pathToFileFull, newDirName);
    this.showPath(this.currentPath);
  }

  mv(pathToFile, newDirName) {
    this.cp(pathToFile, newDirName);
    this.rm(pathToFile);
    this.showPath(this.currentPath);
  }

  rm(path) {
    const pathToFile = this.currentPath + '/' + path;
    deleteFileMdl(pathToFile);
    this.showPath(this.currentPath);
  }

  getSystemInfo(argument) {
    systemInfoMdl(argument);
    this.showPath(this.currentPath);
  }

  calculateHash(path) {
    const pathToFile = this.currentPath + '/' + path;
    calcHashFileMdl(pathToFile);
    this.showPath(this.currentPath);
  }

  compressFile(pathToFile, pathToDest) {
    const pathToFileFull = this.currentPath + '/' + pathToFile;
    const pathToDestFull = this.currentPath + '/' + pathToDest;
    compressFileMdl(pathToFileFull, pathToDestFull);
    this.showPath(this.currentPath);
  }

  decompressFile(pathToFile, pathToDest) {
    const pathToFileFull = this.currentPath + '/' + pathToFile;
    const pathToDestFull = this.currentPath + '/' + pathToDest;
    decompressFileMdl(pathToFileFull, pathToDestFull);
    this.showPath(this.currentPath);
  }

  showPath() {
    process.stdout.write(`You are currently in ${this.currentPath}${EOL}`);
  }
}
