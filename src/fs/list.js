import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = import.meta.dirname;
const folder = path.join(__dirname, 'files');

const list = async () => {
    try {
        console.log(await fs.readdir(folder))
    } catch {
        throw new Error('FS operation failed')
    }
};

await list();