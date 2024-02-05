import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { stat } from 'node:fs/promises';

const calcHashFileMdl = async(pathToFile) => {  
  const algorithm = 'sha256';
  try {
    const fileStat = await stat(pathToFile);
    if (fileStat.isFile()) {
      const hash = createHash(algorithm);
      const stream = createReadStream(pathToFile);
    
      stream.on('readable', () => {
        const data = stream.read();
        if (data) {
          hash.update(data);
        } else {
          console.log(`Hash of the File: ${hash.digest('hex')}`);
        }
      });
    } else {
      console.log('---------------------------');
      console.log('|   Wrong path to file!   |');
      console.log('---------------------------');
    }
  } catch {
    console.log('File does not exist or could not be hashed');
  }
};

export default calcHashFileMdl;
