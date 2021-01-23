# rest-api-server-to-manage-organizational-staff

Simple REST API server to manage an organizational staff,
written with nodejs, express, ts, mongoose and mongodb

You can set environment variables to override default setting.
More info in config folder.

## Project structure

```
.env - file with envarament varibalse, you can overide them with your's
Dockerfile - docker config for run nodejs in docker
docker-compose.yml - configs for run application in dockers
node_modules - folder with nodejs npm modules
src - folder with source code
    > config - folder with relevant project configurations
    > controller - folder with project controllers
    > db - folder with setup connerction to mongodb and queries
    > interfaces
    > models - mongoose models
    > routes
    > validators - joi schemas validators for requests

```

## Data schema - entities

    employee - can has 0..1 managers
    manager - can has 0..n employees, can has 0..1 departments
    department - can has 0..n managers

## API Examples

#### Create new employee

```
POST -> http://localhost:3000/api/v1/employee/addEmployee
{
        "firstName": "<employee first name>",
        "lastName": "<employee last name>",
        "birthday": "<employee birthday, example: 1985-1-1>",
        "empID": "<employee id>",
        "email": "<employee email>",
        "phone": "<employee phone number>",
        "salary": <employee salary>
}

```

#### Create new department

```
POST -> http://localhost:3000/api/v1/department/addDepartment
{
        "depName": "<department name>",
        "desc": "<department description>"
}

```

#### Create new manager

```
POST -> http://localhost:3000/api/v1/manager/addManager
{
        "_manId": "<mongodb _id of employee that should be a manger>"
}

```

#### Assign an employee to a manager

```
PUT -> http://localhost:3000/api/v1/manager/assignEmployeeToManager
{
        "_manId": "<mongodb _id of manger>",
        "_empId": "<mongodb _id of employee>"
}

```

#### Assign a manager to a department

```
POST -> http://localhost:3000/api/v1/manager/assignManagerToDepartment
{
        "_manId": "<mongodb _id of manger>
        "_depId": "<mongodb _id of department>"
}

```

#### Find department has the most employees

```
GET -> http://localhost:3000/api/v1/manager/departmentWithMostEmployees

```

## Aplication use dockers and for tun it use docker-compose

For install docker-compose see the instraction: https://docs.docker.com/compose/install/

For run docker comose you can use `docker-compose up` command

## Run without docker-compose

For this you should has installed nodejs and mongodb.

You can find information about installation of nodejs on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.15.3

    $ npm --version
    6.14.9

If you need to update `npm`, you can use `npm`!

    $ npm install npm -g

You can find information about installation of mongodb community edition on the [official Mongodb website](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

#### Project setup

After installing all needed packages you have to run the below command

```
  npm install
```

### Running the project

    $ npm run build
    $ npm start

### Deployment

Hosted on local host.
