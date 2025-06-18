import React from "react";
import HabitCard from "./components/HabitCard";
import ProgressChart from "./components/ProgressChart"; // 👈 Add this
import InstallPrompt from "./components/InstallPrompt";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">🌱 Habit Tracker</h1>
      <HabitCard />
      <ProgressChart />
      <InstallPrompt /> {/* 👈 Add this */}
    </div>
  );
}

export default App;
