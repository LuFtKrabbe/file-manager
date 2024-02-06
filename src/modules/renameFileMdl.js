import { dirname, join } from 'node:path';
import { rename, access } from 'node:fs/promises';
import { stat } from 'node:fs/promises';

const renameFileMdl = async (pathToFile, newFileName) => {
  const dirPath = dirname(pathToFile);

  try {
    const fileStat = await stat(pathToFile);
    if (!fileStat.isFile()) {
      throw new Error();
    }
    await access(join(dirPath, newFileName))
    .then(
    () => { 
      throw new Error();
    },
    () => {
      console.log('The file will be renamed!');
    })
    await rename(pathToFile, join(dirPath, newFileName))
    console.log('The file is successfully renamed!');
  } catch {
    console.log('Something wrong with file or path is invalid');
  }
};

export default renameFileMdl;
