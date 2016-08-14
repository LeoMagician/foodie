# Dine Together website

Dine Together project is a full stack web application for posting and browsing parties and fancy food. 

## Motivation

Dine Together project got inspiration from Airbnb, which want to provide a platform for those people who have great cooking skill and willing to share their fancy food and their story with others, also for every foodie who wants to experience a totally different way to enjoy the food at someone else home and listen to host's story behind the food meanwhile. In other words, I hope the Dine Together project can connect all of the foodies who do not just want to share the food but the story and emotions behind the food.

# Getting Started

To get up and running you need to install several softwares and their dependencies.

## software stack

Front-end uses Backbone.js, Require.js and twitter bootstrap;
Back-end uses Node.js, Bookshelf and Express;
Database: MySQL.

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

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* Dropwizard - Bla bla bla
* Maven - Maybe
* Atom - ergaerga

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

