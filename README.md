# Adrian's Portfolio Website &middot; <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/REACT-17.0.2-blue?longCache=true&style=for-the-badge" alt="Flutter"></a> <a href="https://firebase.google.com/" target="_blank"><img src="https://img.shields.io/badge/Firebase-Cloud-orange.svg?longCache=true&style=for-the-badge" alt="Firebase"></a>

## Getting Started

You can follow these instructions to build the project.

### Prerequisites
* Setup a project in GCP Firebase
* Enabled Authentication using 'Email/Password' Sign-in method
* Enabled Cloud Firestore
* Enabled Cloud Storage
* Enabled Hosting
* Configured the .env file in root directory with your projects Firebase config

#### Environment Variables (.env)
```
REACT_APP_API_KEY=<api key>
REACT_APP_AUTH_DOMAIN=<auth domain>
REACT_APP_PROJECT_ID=<project id>
REACT_APP_STORAGE_BUCKET=<storage bucket>
REACT_APP_MSG_SENDER_ID=<sender id>
REACT_APP_APPLICATION_ID=1:<app id>
REACT_APP_MEASUREMENT_ID=<measure id>
```

### Setup

#### Clone repistory
```
git clone https://github.com/amroczeK/adr-portfolio.git .
```

#### Install dependencies
```
npm install
```

#### Run application
```
npm start
```

## Deployment

#### Build and deploy to Firebase
```
npm run build && firebase deploy
```