import { join } from 'node:path';
import { stat } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';

const list = async (path) => {
    const filesAndDirs = await readdir(path);
    const dirNames = [];
    const fileNames = [];

    for (const fileOrDir of filesAndDirs) {
        const fileStat = await stat(join(path, fileOrDir));
        if (fileStat.isDirectory()) {
            dirNames.push(fileOrDir);
        } else {
            fileNames.push(fileOrDir);
        }
    }

    const dirs = dirNames.sort().map(value => ({Name: value, Type: 'directory'}))
    const files = fileNames.sort().map(value => ({Name: value, Type: 'file'}))

    console.table([...dirs, ...files]);
};

export default list;