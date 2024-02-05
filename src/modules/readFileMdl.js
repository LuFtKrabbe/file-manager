import { EOL } from 'node:os'
import { readFile } from 'node:fs/promises';

const readFileMdl = async (path) => {
    try {
      process.stdout.write(`Start reading the file:${EOL}`);
      console.log('--------------------------------');
      const readContent = await readFile(path, {encoding: 'utf-8'});
      console.log(readContent);
      console.log('--------------------------------');
      console.log(`The file is successfully read!${EOL}`);
    } catch {
      throw new Error('FS operation failed');
    }
};

export default readFileMdl;
