import React, { useState } from "react";
import "./App.css";
import Assessment from "./Pages/Assessment";
import SideDrawer from "./components/SideDrawer";

function App() {
  // State variable to manage the visibility of the SideDrawer
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  // Function to close the SideDrawer
  const closeSideDrawer = () => {
    setShowSideDrawer(false);
  };

  // Function to open the SideDrawer
  const openSideDrawer = () => {
    setShowSideDrawer(true);
  };

  return (
    // Main App component structure
    <div className="App">
      {/* Conditionally render the SideDrawer based on showSideDrawer */}
      <div className={showSideDrawer ? "SideDrawerDisplay" : "SideDrawerNone"}>
        {/* Render the SideDrawer component and pass closeSideDrawer function as a prop */}
        <SideDrawer closeSideDrawer={closeSideDrawer} />
      </div>

      {/* Render the Assessment component and pass openSideDrawer function as a prop */}
      <Assessment openSideDrawer={openSideDrawer} />
    </div>
  );
}

export default App;
