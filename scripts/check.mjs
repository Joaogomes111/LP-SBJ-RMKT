import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../public/', import.meta.url));
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const references = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(match => match[1]).filter(value => !/^(https?:|\/)/.test(value));
for (const reference of new Set(references)) await access(path.join(root, reference));
await access(path.join(root, 'assets/capri-obra.png'));
console.log(`LP pronta: ${new Set(references).size} referências locais verificadas.`);
