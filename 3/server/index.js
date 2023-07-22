const express = require('express');
var cors = require('cors');
const app = express();
const port = 8080;

const mockDevices = [
  {
    id: 101,
    name: 'Device 101',
    install_timestamp: new Date().toTimeString(),
    status: 'active',
    install_location: 1,
  },
  {
    id: 102,
    name: 'Device 102',
    install_timestamp: new Date().toTimeString(),
    status: 'active',
    install_location: 2,
  },
  {
    id: 103,
    name: 'Device 103',
    install_timestamp: new Date().toTimeString(),
    status: 'active',
    install_location: 1,
  },
  {
    id: 104,
    name: 'Device 104',
    install_timestamp: new Date().toTimeString(),
    status: 'active',
    install_location: 1,
  },
  {
    id: 105,
    name: 'Device 105',
    install_timestamp: new Date().toTimeString(),
    status: 'pending',
    install_location: 1,
  },
  {
    id: 106,
    name: 'Device 106',
    install_timestamp: new Date().toTimeString(),
    status: 'inactive',
    install_location: 1,
  },
];

const mockDwellings = [
  {
    id: 10,
    name: 'House',
    address: '10 Boulevard Henri-Bourassa Est',
    devices: [101, 102, 103],
  },
  {
    id: 11,
    name: 'Aparment',
    address: '122 Boulevard Henri-Bourassa Est',
    devices: [104, 105, 101],
  },
  {
    id: 12,
    name: 'Main House',
    address: '1344 Boulevard Henri-Bourassa Est',
    devices: [106, 102, 105],
  }
];

app.use(cors());

app.get('/device/:id', (req, res) => {
  const deviceId = +req.params.id;
  setTimeout(() => res.json(mockDevices.find(({ id }) => id === deviceId)), 2000);
});

app.get('/dwelling/:id', (req, res) => {
  const dwellingId = +req.params.id;
  setTimeout(() => res.json(mockDwellings.find(({ id }) => id === dwellingId)), 2000);
});

app.get('/service_company/:id', (req, res) => {
  setTimeout(() => res.json({
    id: 1,
    name: 'Company name',
    address: '431 Boulevard Henri-Bourassa Est',
    dwellings: [10, 11, 12],
  }), 2000);
});

app.listen(port, () => {
  console.log(`Mock Server listening on port ${port}`)
});
