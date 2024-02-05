import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const calcHashFileMdl = async (path) => {  
  const algorithm = 'sha256';
  
  const hash = createHash(algorithm);
  const stream = createReadStream(path);

  stream.on('readable', () => {
      const data = stream.read();
      if (data) {
          hash.update(data);
      } else {
          console.log(`${hash.digest('hex')}`);
      }
  });

/*   try {
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
  } */
};

export default calcHashFileMdl;
