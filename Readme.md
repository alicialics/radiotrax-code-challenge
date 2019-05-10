# Cognosos RadioTrax Code Challenge

This challenge is intended to test your comfort with architecting components and managing state within an application.

In this challenge, you will be building an application allowing users to fetch data from server and display the results.

## Basic Requirements

You will be creating a login form that takes username and password from the user and validates them against the rules mentioned below.

1. username

   - must be a text box
   - is required
   - should not contain special characters like (%, \$, &)

2. password
   - must be a text box
   - is required
   - password must be hidden from user as he types (example : **\***)

3) submit button

   - submit button should make following API call to the server with username and password. The client should make an HTTP requests with the Authorization header that contains the word Basic word followed by a space and a base64-encoded string username:password.

```
curl -X GET http://localhost:3000/devices -H 'authorization: Basic Y29nbm9zb3M6Y29nbm9zb3M=' -H 'content-type: application/json'
```

Valid Credentials:

    username: cognosos
    password: cognosos

On successful submission the user should see a list of devices.

```
[
    {
        "id": 1,
        "device_id": 2000002001,
        "firmware_version": "v0.0.0.52",
        "date_device_available": "2017-05-03T14:27:30Z",
        "manufacturer": "cognosos",
        "application_code": "AAA",
        "asset_identifier": "test-2000002001",
        "battery_level": 0.0,
        "internal_temperature": 35.0,
        "status": 10
  },
  {
        "id": 2,
        "device_id": 2000002002,
        "firmware_version": "v0.0.0.52",
        "date_device_available": "2017-05-13T14:27:30Z",
        "manufacturer": "cognosos",
        "application_code": "AAA",
        "asset_identifier": "test-2000002002",
        "battery_level": 80.0,
        "internal_temperature": 45.0,
        "status": 10
  },
  ...
]
```

The user should be able to do the following actions.

- Sort by `date_device_available`, `battery_level`, `internal_temperature`
- Filter by `firmware_version`, `device_id`

The styling aspect of this module to upto the challenge taker. Make sure it's aesthetic and responsive. Emphasis is on the functionality, so focus on that first. The user should see the data in a format deemed fit by the challenge taker.

## Scafolding the project

- Fork this repository and branch out of master branch like this {firstname-lastname}.
- To run the server,

```
cd server
npm install
DEBUG=server:* npm start
```

- You will be implementing the client for this application. Make sure you make frequent meaningful commits on your branch. Once you are ready to submit the code please create a Pull Request and send us an email. You can reach out to us on the email if you have any questions about the challenge.

## Extra Credit

- You can use any framework of your choice (we use React.js)
- Bonus points for minimal use of external libraries
- Bonus points for clean code
- Bonus points for pagination
- Bonus points for using redux or any other state management library
