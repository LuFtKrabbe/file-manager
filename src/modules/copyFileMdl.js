import { dirname, join } from 'node:path';
import { access, copyFile, mkdir, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const copyFileMdl = async (pathToFile, newDirName) => {
/*   const dirPath = dirname(pathToFile);
  const fileName = pathToFile.slice(dirPath.length + 1);
  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(join(newDirName, fileName));

  try {
    await pipeline(readStream, writeStream);
  } catch (err) {
    console.error(err);
  } */
};

export default copyFileMdl;