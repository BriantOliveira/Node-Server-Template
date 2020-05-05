# Node-Server-Template
This repository contains a REST API server template setup with docker container, server logger, JWT, Husky, EsLint.


 ## Installation

Requirements
```
Node 12.14.1+
Npm 6.13.4+
Docker Desktop
```

### Installation
These installation requirements assume you have the Docker daemon running in the background.

1. Get the project onto your machine
```
# clone the repository
https://github.com/BriantOliveira/Node-Server-Template.git
# cd into the project
cd Node-Server-Template
# install all the modules
npm install
```

2. Create a .env file
```
  ├── .env
  ├── .gitignore
  ├── controllers      
  ├── app.js
  └── ...
```

3. Add this to the .env file
```
PORT=8080
SECRETKEY=ThisISnoSecret
```

4. Get docker up and running
```
# build the docker container and get it up and running
docker-compose up --build
```

5. Testing to make sure it works
```
# curl the main route
curl http://localhost:8080
```
If everything was setup successfully, you should get a response as followed.
```
{"status":"Success"}
```

