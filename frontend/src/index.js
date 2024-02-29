import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css"; // Import bootstrap if needed
import Header from "./components/Header";
import { ConnectWallet } from "./components/ConnectWallet";
import Home from "./components/Home";
import RegisterParticipant from "./components/RegisterParticipant";
import RegisterResource from "./components/RegisterResource";
import { Dapp } from "./contracts/dapp";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  // Function to render the active component
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "registerParticipant":
        return <RegisterParticipant RegisterParticipant={Dapp.getInstance().RegisterParticipant} />;
      case "registerResource":
        return <RegisterResource />;
      default:
        return <Home />; 
    }
  };

  useEffect(() => {
    Dapp.getInstance();
  }, []);

  return (
    <React.StrictMode>
      <Header setActiveComponent={setActiveComponent} />
      {activeComponent === "connectWallet" && <ConnectWallet />}
      <div className="container mt-3">
        {renderActiveComponent()}
      </div>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
