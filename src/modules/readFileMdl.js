import { readFile, stat } from 'node:fs/promises';

const readFileMdl = async (pathToFile) => { 
  try {
    const fileStat = await stat(pathToFile);
    if (fileStat.isFile()) {
      console.log(`Start reading the file:`);
      console.log('--------------------------------');
      console.log(await readFile(pathToFile, {encoding: 'utf-8'}));
      console.log('--------------------------------');
      console.log(`The file is successfully read!`);
    } else {
      console.log('---------------------------');
      console.log('|   Wrong path to file!   |')
      console.log('---------------------------');
    }
  } catch {
    console.log('File does not exist or could not be read');
  }
};

export default readFileMdl;
