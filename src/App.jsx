import React from "react";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return <div className="min-h-screen bg-gray-300">
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
    </div>

  </div>
}

export default App;