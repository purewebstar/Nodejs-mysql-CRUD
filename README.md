# CRUD API DEMO
> Simple demonstration of Creating , Reading, Updating and Deleting Api data from Mysql database

## Prerequisite:
- [x] npm/nodejs latest version
- [x] REST Client Extension for Visual Studio OR POSTMAN

## Technologies used:
### 1. Backend
- Nodejs
- ExpressJs
- Mysql
### 2. For Api testing
- Rest Client

## Dependency install
```
npm install --save
```
Dependencies are:
> express, cors, nodemon, mysql, dotenv, helmet

## Run Project
```
npm run start
```
Or
```
nodemon app.js
```
## Rest Client Api testing (POSTMAN)

## Environment Variables
```
PORT=?
DATABASE_HOST=?
DATABASE_USERNAME=?
DATABASE_PASSWORD=?
DATABASE_NAME=?
```

### Reading API ENDPOINTS
```rest
###
// Find all posts
GET http://localhost:4000/blog
Content-Type: application/json

// Find post by Id
###
GET http://localhost:4000/blog/:id
Content-Type: application/json

###
```

### Creating API ENDPOINTS
```rest
###
// create post
POST http://localhost:4000/blog
Content-Type: application/json

{
    "blog_title": "CRUD",
    "blog_description": "Performing a CRUD operation using Nodejs, ExressJs and Mysql"
}

###
```

### Updating API ENDPOINTS
```rest
// update post
###
PUT http://localhost:4000/blog/:id
Content-Type: application/json

{
     "blog_title": "CRUD Operations",
     "blog_description": "Designing Api's using NodeJs, ExpressJs and MysqlDb"
}

###
```

### Deleting API ENDPOINTS
```rest
// delete post
###
DELETE http://localhost:4000/blog/:id
Content-Type: application/json
```

