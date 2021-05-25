# Snapsplash <img src="https://github.com/lyndoncortez/react-snapsplash-app/blob/master/public/favicon-32x32.png?raw=true">

Snapsplash is a photo search web application made with React and uses Unsplash API for searching. Users can search for high-quality images and download them on their local device. [Unsplash](https://unsplash.com) is the internet’s source of freely-usable images.


## Prerequisites

You are required to have [Node.js](https://nodejs.org/) installed to run the app locally.


## Getting Started

To access the Unsplash API, first [register](https://unsplash.com/developers) as a developer.

Once your account has been registered for the API, log in -> go to the Developers page -> Go to "Your Applications"->  "New Application" and fill in the required details.

SignUp or Login in [Unsplash](https://unsplash.com). Go to API/devlopers ->  Documentation. Then Register your app to get the API key and secret.

## API Usage

Update your API_KEY in [App.js](https://github.com/lyndoncortez/react-snapsplash-app/blob/master/src/App.js)

```
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
```



## Usage

```sh
# install all dependency
~/ npm install

# run
~/ npm run dev 
```

## Built With

* HTML
* CSS
* Bootstrap
* React JS

## Screenshot

💾 You can preview it here: [Snapsplash](https://snapsplash-react.netlify.app/)

React App using Unsplash API styled with Bootstrap.
<br>
<br>
<img src="https://github.com/lyndoncortez/batch5-activities/blob/main/React-Snapsplash/Screenshot.png?raw=true">
