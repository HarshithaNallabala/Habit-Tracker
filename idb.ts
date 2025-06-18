import { openDB } from 'idb';

const DB_NAME = 'habit-db';
const STORE_NAME = 'habits';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });
        store.createIndex('date', 'date');
      }
    },
  });
};

export const addHabit = async (habit: { name: string; date: string }) => {
  const db = await initDB();
  await db.add(STORE_NAME, habit);
};

export const getHabitsByDate = async (date: string) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const index = tx.store.index('date');
  return await index.getAll(date);
};
