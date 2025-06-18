import React, { useState } from "react";
import { addHabit } from "../db/idb";

const HabitCard = () => {
  const [habitName, setHabitName] = useState("");

  const handleCheckIn = async () => {
    if (!habitName) return;
    const today = new Date().toISOString().split("T")[0];
    await addHabit({ name: habitName, date: today });
    alert("Habit checked in!");
    setHabitName("");
  };

  return (
    <div className="p-4 border rounded-2xl shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Track a Habit</h2>
      <input
        type="text"
        placeholder="e.g., Drink Water"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        className="border px-2 py-1 rounded mr-2"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleCheckIn}
      >
        Check In
      </button>
    </div>
  );
};

export default HabitCard;
