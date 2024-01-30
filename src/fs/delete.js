import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = import.meta.dirname;
const file = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await fs.rm(file)
    } catch {
        throw new Error('FS operation failed')
    }
};

await remove();