# 🌱 Habit Tracker PWA

A sleek and lightweight **Progressive Web App (PWA)** built with **React**, **Tailwind CSS**, and **IndexedDB** to help you track your daily habits, build streaks, and visualize your progress — all while working **offline**!

![habit](https://github.com/user-attachments/assets/dd812a87-3597-4ee9-aa6d-28ccdcfb82d8)


---

## ✨ Features

- ✅ Add & manage daily habits
- 🔁 Track streaks automatically
- 📶 Offline-first with IndexedDB (`idb`)
- 📱 Installable as a native app (PWA)
- 📊 Visualize progress with charts *(coming soon)*
- 🔔 Reminder notifications *(optional: push mock)*

---

## 🛠️ Tech Stack

- ⚛️ **React**
- 🎨 **Tailwind CSS**
- 🧠 **IndexedDB** (via `idb`)
- 🛡️ **Workbox** (for PWA service worker)
- 📈 **Recharts** (for habit analytics)

---
habit-tracker/
├── public/
│   ├── manifest.json
│   └── icons/
├── src/
│   ├── components/
│   │   ├── HabitCard.jsx
│   │   └── AddHabitForm.jsx
│   ├── utils/
│   │   └── db.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── tailwind.config.js
