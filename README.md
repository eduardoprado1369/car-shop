# Project Car Shop

This is a back-end project which uses the principles of `OOP` to create a CRUD API to manage a Car Shop, in which users can see the existing vehicles, filter them by id, add new vehicles, update and delete existing vehicles.  
The service layer of this application was fully tested using unit tests.

# Technologies used
* TypeScript
* MongoDB
* Mongoose ODM
* Node.js
* Express.js
* Chai
* Mocha
* Sinon

# How to run the project
* With Docker:  
  1. Clone the repository:  
     `git clone git@github.com:eduardoprado1369/car-shop.git`  
  2. Start the containers that run Node and MongoDB services:  
    `docker-compose up -d` <br> * **The default port is `27017`** <br>
  3. Access the container's CLI: <br>
    `docker exec -it car_shop bash` <br>
  4. Install the dependencies: <br>
    `npm install`
    
* Without Docker: <br>
  1. Clone the repository: <br>
    `git clone git@github.com:eduardoprado1369/car-shop.git` <br>
  2. Install the dependencies: <br>
    `npm install`
    
# How to run the tests and coverage
* To run the tests:
  `npm run test:mocha`
* To run the test coverage:
  `npm run test:coverage`
    
# Routes
* GET
  * `/cars` -> lists all cars
  * `/cars/:id` -> lists a specific car
  * `/motorcycles` -> lists all motorcycles
  * `/motorcycles/:id` -> lists a specific motorcycle
* POST
  * `/cars` -> creates a new car
  * `/motorcycles` -> creates a new motorcycle
* PUT
  * `/cars/:id` -> updates a car
  * `/motorcycle/:id` -> updates a motorcycle
* DELETE
  * `/cars/:id` -> deletes a car
  * `/motorcycle/:id` -> deletes a motorcycle
<br>
* This project was developed during the Back-end module of Trybe's Web Development Course.
