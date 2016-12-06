# alphaAPI

This is a simple Restful API to perform actions on thermostats. Other sensors/devices may be 
added later.

| Route        | Method           | Description  |
| ------------- |:-------------:| -----:|
| /api/thermostats      | GET | Get all thermostats |
| /api/thermostats      | POST      |   Create a thermostat |
| /api/thermostats/uuid | GET      |    Get a specific thermostat |
| /api/thermostats/uuid | PUT      |    Update a specific thermostat |
| /api/thermostats/uuid | DELETE      |    Delete a specific thermostat |

## Testing
Currently, if you run node server.js locally, you can test a couple of ways. Bear in mind you will need to have a mongo instance running.
1. Use curl. To test creating a thermostat, use the following curl to create a dummy thermostat: ````curl -X POST -d '{"version":1,"temperature":32,"humidity":61,"occupancy":true,"uuid":"1234567890987654321","nearby-devices":[{"uuid":"1234","rssi":"0987"}]}' "localhost:8080/api/thermostats"````

....To GET the specific thermostat you just created locally, run this curl: ````curl -X GET localhost:8080/api/thermostats/1234567890987654321````

2. Use the Postman Google Chrome API testing tool. More instructions on that to follow.
