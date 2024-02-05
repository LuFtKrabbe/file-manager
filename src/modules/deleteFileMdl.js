import { dirname, join } from 'node:path';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const deleteFileMdl = async (path) => {
    try {
        await rm(path);
        console.log('The file is successfully removed!');
    } catch {
        throw new Error('FS operation failed');
    }
};

export default deleteFileMdl;