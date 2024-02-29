import React, { useState } from "react";

const RegisterResource = () => {
  // State for form fields
  const [resourceAddress, setResourceAddress] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for registering resource
    console.log("Registering resource...");
  };

  return (
    <div>
      <h2>Enter the address of the resource:</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="resourceAddress" className="form-label">Resource Address</label>
          <input type="text" className="form-control" id="resourceAddress" value={resourceAddress} onChange={(e) => setResourceAddress(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegisterResource;
