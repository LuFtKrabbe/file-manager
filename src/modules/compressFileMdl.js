import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { brotliCompress, createBrotliCompress, createGzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const compressFileMdl = async (pathToFile, pathToDest) => {
  const brotliCompress = createBrotliCompress();

  try {
    await pipeline(
      createReadStream(pathToFile),
      brotliCompress,
      createWriteStream(pathToDest),
    );
  } catch (err) {
    console.error(err);
  }
};

export default compressFileMdl;
