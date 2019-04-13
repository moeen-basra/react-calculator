# React Lumen Calculator App

The calculator app build using the React, Lumen, Photon, Docker

### Prerequisites

Make sure you have installed the docker and docker-compose before using this application
you can find the guide [here](https://docs.docker.com/docker-for-windows/)

#### Please follow the guide to install the app

clone the project from git

``git clone http://``

go to project directory and run the command 

``docker-composer up -d --build``

create a .env file under api and copy the content of .env.example

open your favorite brower and paste the follwoing url

``http://localhost:3000``

for api use the following url

``http://localhost:8088``

to check the history of all your calculations use the following api

``http://localhost:8088/history``

to filter the history use the following filters

``http://localhost:8088/history?q=operation=add``

