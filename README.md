# my-dentist

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

The deployed version of this app is available online → [MyDentist]().

To test the functionalities of this application you can use the following credentials:

```
email: user@example.com 
password: 123456
```
Or by registering with your own email and password.

### Getting Started

To get started clone this repo and install the dependencies in the root directory ↓

| STEPS   | [NPM](https://www.npmjs.com/)     |
| ------- | --------------------------------- | 
| Install |`npm install`                      |
| Run     |`npm run dev`                      |

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Layout and Tree

```
├── backend                            # BACKEND
│   ├── config                         # DB connection   
│   ├── controllers                    # Routes controllers
│   ├── data                           # Test data
│   ├── middleware
│   ├── models                         # DB models
│   ├── routes                         # API routes
│   ├── utils                          # JSON web token
│   ├── seeder.js                      # DB seeder
│   └── server.js                      # Server file
├── frontend                           # FRONTEND
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   └── src
│       ├── components                 # Reusable Components
│       ├── context                    # App Context (user & appointment info) 
│       ├── data                       # Time slots
│       ├── screens                    # App Screens
│       ├── styles                     # Material UI useStyles functions
│       ├── utils                      # Functions for API calls 
│       ├── App.css
│       ├── App.js
│       ├── index.css
│       └── index.js                  
├── .env                               # Config variables (Node env, port, DB string & JWT secret)
├── .gitignore
├── package-lock.json
├── package.json
├── Procfile                           # HEROKU deployment
└── README.md

```
### App

#### ES6 + Features

- Arrow Functions
- Template Literals
- Destructuring Assignment
- Block-Scoped Variables Let and Const
- async await
- Modules export/import
- New Built-In Methods

#### Libraries/Frameworks

- react: UI library
- react-router-dom: Browser Router, Route and Link components
- react-calendar: Date picker for react app 
- nodejs: JS runtime for BE
- express: NodeJS framework to create server
- express-async-handler: To handle async operations to retrieve data from DB
- mongoose: For database structuring with mongodb
- bcryptjs: For hashing user passwords
- jsonwebtoken: JWT implementation library
- dotenv: Loads environment variables from a .env file into process.env
- @sendgrid/mail: Twilio SendGrid NodeJS mail service
- nodemon: To run server file on every new change
- concurrently: To run both FE + BE server at the same time

#### Api Calls

##### Users

1. Post - Register User

```
'../api/users'

```

2. Post - Login User

```
'../api/users/login'

```

3. Post - Make Appointment

```
'../api/appointment'

```

4. Get - User Profile

```
'../api/users/:id'

```


##### Appointments

1. POST - Create Appointment

```
'../api/appointment'

```

2. POST - Appointment Confirmation Email

```
'../api/appointment/:id'

```

3. GET - Get Appointment Details

```
'../api/appointment/:id'

```

4. GET - Get User Appointment List

```
'../api/appointment/user/:id'

```

5. PUT - Cancel Appointment

```
'../api/appointment/cancel/:id'

```

##### NOTE: Local Storage

JWT token for authentication is stored in the local storage of the browser and added to header of the request.

### Author

- [callejas1](https://github.com/callejas1)