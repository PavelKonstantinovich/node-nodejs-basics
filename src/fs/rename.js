import fs from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';

const __dirname = import.meta.dirname;
const file = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFile = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    if (existsSync(newFile)) {
        throw new Error('FS operation failed')
    }
    try {
        await fs.rename(file, newFile)
    } catch {
        throw new Error('FS operation failed')
    }
};

await rename();