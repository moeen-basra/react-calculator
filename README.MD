# React Lumen Calculator App

The calculator app build using the React, Lumen, Photon, Docker

## Prerequisites

Make sure you have installed the docker and docker-compose before using this application
you can find the guide [here](https://docs.docker.com/docker-for-windows/)

#### Please follow the guide to install the app

*clone the project from git

```
git clone https://github.com/moeen-basra/react-calculator
```

2. go to api folder and create env file, copy content from .env.example and update 

3. got app edit .env and update the ip for app

4. go to project root directory and run the command

```
docker-compose -f docker-compose.prod.yml build
```

5. run the containers

```
docker-compose -f docker-compose.prod.yml up -d
```

6. open your favorite brower and paste the follwoing url

```
http://{hostip}:8087
```

7. for api use the following url

```
http://{hostip}:8088
```

8. for jenkins

```
http://{hostip}:8089
```


9. reterive the jenkins key from logs and paste. Next continue with recommended plugins and you are ready to create pipe lines for build and deployments.

