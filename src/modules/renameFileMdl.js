import { dirname, join } from 'node:path';
import { rename, access } from 'node:fs/promises';

const renameFileMdl = async (filePath, newFileName) => {
/*     const dirPath = dirname(filePath);
    
    try {
        await access(filePath)
            .catch(() => { 
                throw new Error();
            })
        await access(join(dirPath, newFileName))
            .then(
            () => { 
                throw new Error();
            },
            () => {
                console.log('The file will be renamed!');
            })
        await rename(filePath, join(dirPath, newFileName))
        console.log('The file is successfully renamed!');
    } catch {
        throw new Error('FS operation failed');
    } */
};

export default renameFileMdl;