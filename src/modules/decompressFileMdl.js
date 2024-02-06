import { join, parse } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { stat } from 'node:fs/promises';

const decompressFileMdl = async (pathToFile, pathToDest) => {
  const brotliDecompress = createBrotliDecompress();
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
      brotliDecompress,
      createWriteStream(join(pathToDest, `${fileName}.txt`)),
    );
  } catch {
    console.log('File is not decompressed');
  }
};

export default decompressFileMdl;
