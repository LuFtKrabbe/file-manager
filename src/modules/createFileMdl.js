import { writeFile, access } from 'node:fs/promises';

const createFileMdl = async(pathToNewFile) => {    
  try {
    await access(pathToNewFile)
      .then(
      () => {
        console.log('The file already exists!');
      },
      () => {
        console.log('File does not exist, start to creating a new one...');
      })
    await writeFile(pathToNewFile, '');
    console.log('The file is successfully created!');
  } catch (err) {
    console.log('Such file could not be created!');
  }
};

export default createFileMdl;
