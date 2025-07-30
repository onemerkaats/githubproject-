import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import CarModel from "./CarModel";
import "./App.css";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=800&q=80",
    model: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tesla-model-3.glb",
    year: 2024,
    price: "$89,900"
  },
  {
    id: 2,
    name: "BMW i8",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
    model: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bmw-i8.glb",
    year: 2022,
    price: "$72,500"
  }
];

function App() {
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  return (
    <div className="App">
      <header>
        <h1>3D Car Dealership</h1>
      </header>
      <main>
        <div className="car-list">
          {cars.map((car) => (
            <div className="car-card" key={car.id} onClick={() => setSelectedCar(car)}>
              <img src={car.img} alt={car.name} />
              <h2>{car.name}</h2>
              <p>{car.year}</p>
              <p>{car.price}</p>
            </div>
          ))}
        </div>
        <div className="car-3d-viewer">
          <h2>{selectedCar.name} 3D View</h2>
          <div className="viewer">
            <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 10, 5]} intensity={1} />
              <Environment preset="sunset" />
              <Suspense fallback={null}>
                <CarModel url={selectedCar.model} />
              </Suspense>
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Canvas>
          </div>
        </div>
      </main>
      <footer>
        <small>
          Images and 3D models © respective owners. For demo only.
        </small>
      </footer>
    </div>
  );
}

export default App;
