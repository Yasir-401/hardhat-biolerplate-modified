import React from "react";
import { Dapp_temp } from "./Dapp_temp";

const Header = ({ setActiveComponent }) => {
  const handleButtonClick = (component) => {
    setActiveComponent(component); // Update the active component when a button is clicked
  };

  return (
    <header className="bg-light p-3">
      <h1 className="text-center">Circular InnovationLab</h1>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
          <button className="btn btn-primary mr-3" onClick={() => handleButtonClick("home")}>Home</button>
          <button className="btn btn-primary mr-3" onClick={() => handleButtonClick("registerParticipant")}>Register Participant</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick("registerResource")}>Register Resource</button>
        </div>
        <div onClick={() => handleButtonClick("dApp")}><Dapp_temp /></div>
      </div>
    </header>
  );
};

export default Header;
