# Dine Together website

Dine Together project is a full stack web application for posting and browsing parties and fancy food. 

## Motivation

Dine Together project got inspiration from Airbnb, which want to provide a platform for those people who have great cooking skill and willing to share their fancy food and their story with others, also for every foodie who wants to experience a totally different way to enjoy the food at someone else home and listen to host's story behind the food meanwhile. In other words, I hope the Dine Together project can connect all of the foodies who do not just want to share the food but the story and emotions behind the food.

# Getting Started

To get up and running you need to install several softwares and their dependencies.

## software stack

Front-end uses angular.js, Require.js and twitter bootstrap;
Back-end uses Node.js, mongoose and Express;
Database: MongoDB.  

## Dependencies
Front-end: underscore.js, Jquery, JSRender/JSView and moment.js;
Back-end: Mysql, knex, body-parser.

## Installing

A step by step series of examples that tell you have to get a development env running

Stay what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

# Define API entry points

we need to define our API entry points - we want to be able to perform basic CRUD operations on the following resources: users, dinners, and reservations.

## Logged in users

1. When users READ their profile information
```
GET /users/:id
```
2. When users UPDATE their profile
```
PUT /users/:id
```
3. When users DELETE their account
```
DELETE /users/:id
```
4. When users logout (Not a CRUD operation)
```
GET /users/logout
```

## Guest user
1. When CREATE a new user
```
POST /user
```
2. When login (READ)
```
POST /users/login
```

## Dinners

1. When host CREATE her new dinner/party
```
POST /dinners
```
2. When host UPDATE her dinner/party
```
PUT /dinners/:id
```
3. When host DELETE her dinner/party
```
DELETE /dinners/:id
```
4. When host fetch all dinners/parties which she created
```
GET /dinners/user/:id
```
5. Fetch all dinners from a single category
```
GET /dinners/category/:id
```
6. Fetch all dinners
```
GET /dinners
```

## Reservations

1. Reserve a dinner
```
POST /reservations
```
2. Fetch all reserved dinners which foodie booked
```
GET /reservations
```
3. Fetch all reservation from a single dinner
```
GET /reservations/dinner/:id
```
4. Cancel a dinner
```
DELETE /reservations:id
```

## Categories

1. Fetch all categories
```
GET /categories
```


