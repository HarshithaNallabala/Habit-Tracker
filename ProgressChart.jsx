import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getCheckInDates } from "../utils/db";

const habitName = "Drink Water";

const ProgressChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const dates = await getCheckInDates(habitName);
      const formatted = dates.map((date, index) => ({
        date,
        streak: index + 1,
      }));
      setData(formatted);
    };
    loadData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-center">📈 Your Progress</h3>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="streak" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500">No check-ins yet.</p>
      )}
    </div>
  );
};

export default ProgressChart;
