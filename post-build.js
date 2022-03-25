import fs from 'node:fs';
import path from 'node:path';

const cjs = path.resolve('./dist/cjs/package.json');
fs.writeFileSync(cjs, JSON.stringify({ type: 'commonjs' }, null, 4));

const mjs = path.resolve('./dist/mjs/package.json');
fs.writeFileSync(mjs, JSON.stringify({ type: 'module' }, null, 4));
