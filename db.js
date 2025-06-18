import { openDB } from 'idb';

const DB_NAME = 'habitTracker';
const STORE_NAME = 'checkins';

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' }); // id = habitName + date
      }
    }
  });
}

export async function saveCheckIn(habitName, date) {
  const db = await initDB();
  const id = `${habitName}_${date}`;
  await db.put(STORE_NAME, { id, habitName, date });
}

export async function getLastCheckIn(habitName) {
  const db = await initDB();
  const keys = await db.getAllKeys(STORE_NAME);
  const habitDates = keys
    .filter(key => key.startsWith(habitName))
    .map(key => key.split('_')[1])
    .sort((a, b) => new Date(b) - new Date(a));
  return habitDates[0] || null;
}

export async function getCheckInDates(habitName) {
  const db = await initDB();
  const all = await db.getAll(STORE_NAME);
  return all
    .filter(entry => entry.habitName === habitName)
    .map(entry => entry.date)
    .sort((a, b) => new Date(a) - new Date(b));
}
