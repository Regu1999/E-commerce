import fs from 'node:fs/promises';

export async function readData() {
  const data = await fs.readFile('usersAuth.json', 'utf8');
  return JSON.parse(data);
}

export async function writeData(data) {
  await fs.writeFile('usersAuth.json', JSON.stringify(data));
}
