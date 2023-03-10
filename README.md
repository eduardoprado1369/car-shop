# Project Car Shop

This is a back-end project which uses the principles of `OOP` to create a CRUD API that manages a Car Shop, in which users can read the existing vehicles, filter them by id, add new vehicles, update and delete existing vehicles. This application was fully tested using integration tests.

# Technologies used:
* TypeScript
* MongoDB
* Mongoose ODM
* Noje.js
* Express.js
* Chai
* Mocha
* Sinon

# How to run the project
* With Docker: <br>
  1- Clone the repository: <br>
    `git clone git@github.com:eduardoprado1369/car-shop.git` <br>
  2- Start the containers that run Node and MongoDB services:
    `docker-compose up -d`
   * The default port is `27017`
  3- Access the container's CLI:
    `docker exec -it car_shop bash`
  4- Install the dependencies:
    `npm install`
    
* Without Doocker:
  1- 1- Clone the repository:
    `git clone git@github.com:eduardoprado1369/car-shop.git`
  2- Install the dependencies:
    `npm install`
<br>
* This project was developed during the Back-end module of Trybe's Web Development Course.
