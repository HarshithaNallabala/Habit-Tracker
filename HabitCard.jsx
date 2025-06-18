import React, { useEffect, useState } from "react";
import { saveCheckIn, getLastCheckIn, getCheckInDates } from "../utils/db";

const getTodayDate = () => new Date().toISOString().split("T")[0];
const habitName = "Drink Water";

const HabitCard = () => {
  const [streak, setStreak] = useState(0);
  const [lastCheckIn, setLastCheckIn] = useState(null);
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);

  useEffect(() => {
    const loadCheckInData = async () => {
      const today = getTodayDate();
      const last = await getLastCheckIn(habitName);
      setLastCheckIn(last);

      if (last === today) {
        setHasCheckedInToday(true);
      }

      const dates = await getCheckInDates(habitName);
      if (dates.length === 0) {
        setStreak(0);
        return;
      }

      let currentStreak = 1;
      for (let i = dates.length - 1; i > 0; i--) {
        const prev = new Date(dates[i - 1]);
        const curr = new Date(dates[i]);
        const diff = (curr - prev) / (1000 * 60 * 60 * 24);

        if (diff === 1) {
          currentStreak++;
        } else if (diff > 1) {
          break;
        }
      }
      setStreak(currentStreak);
    };

    loadCheckInData();
  }, []);
  useEffect(() => {
  if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission();
  }


  const timeout = setTimeout(() => {
    if (Notification.permission === "granted") {
      new Notification("⏰ Time to check in your habit!", {
        body: "Don't forget to drink water and mark your habit! 💧",
      });
    }
  }, 10000);

  return () => clearTimeout(timeout);
}, []);


  const handleCheckIn = async () => {
    const today = getTodayDate();
    await saveCheckIn(habitName, today);
    setLastCheckIn(today);
    setHasCheckedInToday(true);
    setStreak((prev) => prev + 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">💧 {habitName}</h2>
      <p className="mb-4 text-gray-600">Streak: <span className="font-bold">{streak} 🔥</span></p>
      <button
        onClick={handleCheckIn}
        disabled={hasCheckedInToday}
        className={`${
          hasCheckedInToday ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        } text-white py-2 px-4 rounded-xl transition`}
      >
        {hasCheckedInToday ? "✅ Already Checked In Today" : "✅ Check-in for Today"}
      </button>
    </div>
  );
};

export default HabitCard;
