import { rm } from 'node:fs/promises';

const deleteFileMdl = async (path) => {
    try {
        await rm(path);
        console.log('The file is successfully removed!');
    } catch {
        console.log('The file does not exist');
    }
};

export default deleteFileMdl;