import React from "react";
import HabitCard from "./components/HabitCard.tsx";
 // ✅ correct relative path

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">🌱 Habit Tracker</h1>
      <HabitCard />
    </div>
  );
}

export default App;
