import React from 'react';
import './App.css';
import Cesium from "cesium";

const App: React.FC = () => {
  const viewer = new Cesium.Viewer(document.getElementById("cesium")!);

  return (
    <div id="cesium">
    </div>
  );
}

export default App;
