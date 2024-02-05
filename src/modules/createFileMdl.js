import { writeFile, access } from 'node:fs/promises';

const createFileMdl = async (path) => {    
  try {
    await access(path)
      .then(
      () => {
        console.log('The file already exists!');
        throw new Error();
      },
      () => {
        console.log('File does not exist, start to creating a new one...');
      })
    await writeFile(path, '');
    console.log('The file is successfully created!');
  } catch (err) {
    throw new Error('FS operation failed')
  }
};

export default createFileMdl;
