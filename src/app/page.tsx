'use client';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import { FaBolt, FaCar, FaPlane } from 'react-icons/fa';

const carModels = [
  { label: 'Maruti Alto 800 (Petrol)', value: 0.18 },
  { label: 'Maruti Swift (Petrol)', value: 0.19 },
  { label: 'Hyundai i20 (Diesel)', value: 0.22 },
  { label: 'Hyundai Creta (Petrol)', value: 0.21 },
  { label: 'Tata Nexon EV', value: 0.05 },
  { label: 'Tata Punch (Petrol)', value: 0.20 },
  { label: 'Tata Tiago (Petrol)', value: 0.19 },
  { label: 'Toyota Fortuner (Diesel)', value: 0.25 },
  { label: 'Toyota Innova Crysta (Diesel)', value: 0.24 },
  { label: 'Toyota Camry Hybrid', value: 0.11 },
  { label: 'Mahindra Thar (Diesel)', value: 0.23 },
  { label: 'Mahindra XUV700 (Petrol)', value: 0.21 },
  { label: 'Mahindra Scorpio-N (Diesel)', value: 0.24 },
  { label: 'Kia Seltos (Petrol)', value: 0.21 },
  { label: 'Kia Sonet (Diesel)', value: 0.22 },
  { label: 'Renault Kwid (Petrol)', value: 0.18 },
  { label: 'Renault Triber (Petrol)', value: 0.19 },
  { label: 'Honda City (Petrol)', value: 0.20 },
  { label: 'Honda Amaze (Diesel)', value: 0.22 },
  { label: 'Skoda Kushaq (Petrol)', value: 0.21 },
  { label: 'Volkswagen Virtus (Petrol)', value: 0.20 },
  { label: 'MG Hector (Petrol)', value: 0.23 },
  { label: 'MG ZS EV (Electric)', value: 0.04 },
  { label: 'BYD e6 (Electric)', value: 0.03 },
  { label: 'Hyundai Kona Electric', value: 0.04 }
];

const tips = [
  'Switch to renewable energy sources 🌞',
  'Carpool whenever possible 🚗',
  'Avoid single-use plastics ♻️',
  'Eat more plant-based meals 🥗',
  'Use public transportation 🚌',
  'Ride a bicycle or walk 🚶‍♀️',
  'Unplug devices when not in use 🔌',
  'Opt for energy-efficient appliances 💡',
  'Recycle and compost at home ♻️',
  'Fly less and offset flights ✈️',
  'Use a fan instead of AC when possible 🌬️',
  'Reduce meat and dairy consumption 🐄',
  'Buy locally produced goods 🛍️',
  'Practice water conservation 🚿',
  'Switch to LED lights 💡',
  'Avoid fast fashion 👗',
  'Grow your own veggies 🌱',
  'Buy in bulk to reduce packaging 📦',
  'Read digital books instead of printed 📚',
  'Install solar panels if possible ☀️'
];

export default function Home() {
  const [electricity, setElectricity] = useState(0);
  const [carKm, setCarKm] = useState(0);
  const [flightHours, setFlightHours] = useState(0);
  const [carModel, setCarModel] = useState(carModels[0]);
  const [footprint, setFootprint] = useState<string | null>(null);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const calculateFootprint = () => {
    const electricityFactor = 0.85;
    const flightFactor = 90;
    const carFactor = carModel.value;

    const total =
      electricity * electricityFactor +
      carKm * carFactor +
      flightHours * flightFactor;

    setFootprint(total.toFixed(2));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6 text-green-900">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold text-center text-green-700">🌍 GreenGauge</h1>
        <div className="bg-white p-6 rounded-2xl shadow-xl space-y-6">

          <div>
            <label className="font-medium flex items-center gap-2">
              <FaBolt /> Electricity Usage (kWh/month)
            </label>
            <input
              type="number"
              value={electricity}
              onChange={(e) => setElectricity(Number(e.target.value))}
              className="mt-1 w-full border rounded px-4 py-2"
   
            />
          </div>

          <div>
            <label className="font-medium flex items-center gap-2">
              <FaCar /> Car Travel (km/month)
            </label>
            <input
              type="number"
              value={carKm}
              onChange={(e) => setCarKm(Number(e.target.value))}
              className="mt-1 w-full border rounded px-4 py-2"
            />
            <div className="mt-2">
              <Select
                options={carModels}
                defaultValue={carModel}
                onChange={(selected) => selected && setCarModel(selected)}
              />
            </div>
          </div>

          <div>
            <label className="font-medium flex items-center gap-2">
              <FaPlane /> Flight Travel (hours/year)
            </label>
            <input
              type="number"
              value={flightHours}
              onChange={(e) => setFlightHours(Number(e.target.value))}
              className="mt-1 w-full border rounded px-4 py-2"
            />
          </div>
           <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/greengauge.jpg')" }}>
    
      <div className="bg-white/80 p-10 rounded-xl max-w-xl mx-auto mt-20 shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to GreenGauge</h1>
        <p className="text-center">Track your carbon footprint in real time</p>
        {/* your input UI goes here */}
      </div>
             </div>

          <button
            onClick={calculateFootprint}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded"
          >
            Calculate
          </button>

          {footprint && (
            <div className="bg-green-50 border border-green-300 p-4 rounded text-center text-lg font-semibold">
              🌱 Estimated Carbon Footprint: <span className="text-green-800">{footprint} kg CO₂/year</span>
            </div>
          )}

          <div className="bg-white text-sm text-gray-700 p-3 rounded shadow">
            💡 Tip: {tips[tipIndex]}
          </div>
        </div>
      </div>
    </main>
  );
}

