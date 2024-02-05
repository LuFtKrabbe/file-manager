import { join } from 'node:path';
import { stat } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';

const listDirFilesMdl = async (currentPath) => {
  const filesAndDirs = await readdir(currentPath);
  const dirNames = [];
  const fileNames = [];

  for (const fileOrDir of filesAndDirs) {
    const fileStat = await stat(join(currentPath, fileOrDir));
    if (fileStat.isDirectory()) {
      dirNames.push(fileOrDir);
    } else {
      fileNames.push(fileOrDir);
    }
  }

  const dirs = dirNames.sort().map(value => ({Name: value, Type: 'directory'}))
  const files = fileNames.sort().map(value => ({Name: value, Type: 'file'}))

  if ([...dirs, ...files].length === 0) {
    console.log('-------------------------------');
    console.log('|   The directory is empty!   |')
    console.log('-------------------------------');
  } else {
    console.table([...dirs, ...files]);
  }
};

export default listDirFilesMdl;
