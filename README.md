# EnergAIzeUINodeApp

## Available Scripts

To run both client and server in dev mode , In the project directory, you can run:

### `cd server && npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000/startups](http://localhost:3000/startups) to view client in the browser.

Open [http://localhost:5000/startups](http://localhost:5000/startups) to verify server apis' in the browser / any relevant tools.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `cd server && npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To serve the client from the server , run the build using npm run build(mentioned above) and then serve it using below commands,

### `cd server && npm start`

App will be served in single port by server . Open [http://localhost:5000/startups](http://localhost:5000/startups) to load the app. 
