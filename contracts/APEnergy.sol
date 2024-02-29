// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract APEnergy {
    struct Participant {
        address participantAddress;
        bool isRegistered;
    }

    struct Resource {
        address resourceAddress;
        bool isRegistered;
        mapping(uint => EnergyData) energyData;
    }

    struct EnergyData {
        uint timestamp;
        uint consumption;
        uint production;
    }

    mapping(address => Participant) public participants;
    mapping(address => Resource) public resources;

    function registerParticipant() public {
        participants[msg.sender] = Participant(msg.sender, true);
    }

    function registerResource(address resourceAddress) public {
        require(participants[msg.sender].isRegistered, "Only registered participants can register a resource.");
        //resources[resourceAddress] = Resource(resourceAddress, true);
        resources[resourceAddress].resourceAddress = resourceAddress;
        resources[resourceAddress].isRegistered = true;
    }

    function logEnergyData(address resourceAddress, uint timestamp, uint consumption, uint production) public {
        require(resources[resourceAddress].isRegistered, "Only registered resources can log energy data.");
        resources[resourceAddress].energyData[timestamp] = EnergyData(timestamp, consumption, production);
    }

    function getTotalEnergyData(address resourceAddress, uint startTimestamp, uint endTimestamp) public view returns (uint totalConsumption, uint totalProduction) {
        require(resources[resourceAddress].isRegistered, "Only registered resources have energy data.");
        for(uint i = startTimestamp; i <= endTimestamp; i++) {
            totalConsumption += resources[resourceAddress].energyData[i].consumption;
            totalProduction += resources[resourceAddress].energyData[i].production;
        }
    }
}
