import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = import.meta.dirname;
const folder = path.join(__dirname, 'files');
const copyFolder = path.join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await fs.cp(folder, copyFolder, { recursive: true, force: false, errorOnExist: true })
    } catch {
        throw new Error('FS operation failed')
    }
};

await copy();
