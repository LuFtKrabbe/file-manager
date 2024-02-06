import { dirname, join } from 'node:path';
import { access, mkdir } from 'node:fs/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const copyFileMdl = async (pathToFile, pathToNewDirName) => {
  const dirPath = dirname(pathToFile);
  const fileName = pathToFile.slice(dirPath.length + 1);

  try {
    await access(pathToFile);
    await access(dirname(pathToNewDirName));
    await access(pathToNewDirName).catch(() => {
      mkdir(pathToNewDirName);
    });
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(join(pathToNewDirName, fileName));
    await pipeline(readStream, writeStream);
  } catch {
    console.log('Something wrong with copying');
  }
};

export default copyFileMdl;