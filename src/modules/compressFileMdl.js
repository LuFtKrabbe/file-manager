import { pipeline } from 'node:stream/promises';
import { join, parse } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { stat } from 'node:fs/promises';

const compressFileMdl = async (pathToFile, pathToDest) => {
  const brotliCompress = createBrotliCompress();
  const fileName = parse(pathToFile).name;

  try {
    const fileStat = await stat(pathToFile);
    if (!fileStat.isFile()) {
      throw new Error();
    }
  } catch {
    console.log('File does not exist');
  }

  try {
    const fileStat = await stat(pathToDest);
    console.log(pathToDest);
    if (!fileStat.isDirectory()) {
      throw new Error();
    }
  } catch {
    console.log('Directory does not exist');
  }

  try {
    await pipeline(
      createReadStream(pathToFile),
      brotliCompress,
      createWriteStream(join(pathToDest, `${fileName}.gz`)),
    );
  } catch {
    console.log('File is not compressed');
  }
};

export default compressFileMdl;
