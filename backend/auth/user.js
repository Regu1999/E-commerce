import bcryptjs from 'bcryptjs';
import { v4 as generateId } from 'uuid';

import { NotFoundError } from '../util/errors.js';
import { readData, writeData } from './util.js';
const { hash } = bcryptjs

export async function add(data) {
  const storedData = await readData();
  const userId = generateId();
  const hashedPw = await hash(data.password, 12);
  if (!storedData) {
    storedData = [];
  }
  storedData.push({ ...data, password: hashedPw, id: userId });
  await writeData(storedData);
  return { id: userId, email: data.email };
}

export async function get(email) {
  const storedData = await readData();
  if (!storedData || storedData.length === 0) {
    throw new NotFoundError('Could not find any users.');
  }

  const user = storedData.find((ev) => ev.email === email);
  if (!user) {
    throw new NotFoundError('Could not find user for email ' + email);
  }

  return user;
}
