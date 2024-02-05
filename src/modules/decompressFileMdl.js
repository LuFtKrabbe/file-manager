import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress, createGzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { brotliDecompress } from 'node:zlib';

const decompressFileMdl = async (pathToFile, pathToDest) => {
  const brotliDecompress = createBrotliDecompress();

  try {
    await pipeline(
      createReadStream(pathToFile),
      brotliDecompress,
      createWriteStream(pathToDest),
    );
  } catch (err) {
    console.error(err);
  }
};

export default decompressFileMdl;
