import { dirname, join } from 'node:path';
import { access, copyFile, mkdir, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const copyFileMdl = async (pathToFile, newDirName) => {
  const dirPath = dirname(pathToFile);
  const fileName = pathToFile.slice(dirPath.length + 1);
  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(join(newDirName, fileName));

  try {
    await pipeline(readStream, writeStream);
  } catch (err) {
    console.error(err);
  }

/*     try {
        await access(filesFolder)
        .catch(
        () => {
            console.log('The folder with files for copy does not exist.');
            throw new Error();
        });
        await access(copiedFilesFolder)
        .then(
        () => {
            console.log('The folder for copied files already exists!');
            throw new Error();
        },            
        () => {
            console.log('The folder for copied files will be created.');
        })
        await mkdir(copiedFilesFolder);
        const readFiles = await readdir(filesFolder);
        const filesCopying = readFiles.map(fileName => {
            copyFile(join(filesFolder, fileName), join(copiedFilesFolder, fileName));
        })
        await Promise.all(filesCopying);
        console.log('All files are succesfully copied!');
    } catch (err) {
        throw new Error('FS operation failed');
    } */
};

export default copyFileMdl;