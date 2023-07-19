# clean-architecture-simple-project
Hello world!

This project represents one possible way of implementating the Clean Architecure. 

We will try to apply most of the Clean Architecture principles but we will do some shortcuts in order to stay simple.

For those who don't knows the Clean Architecture and Domain-Driven Design, you can find a presentation here: 
- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [The Domain-Driven Design Reference](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf)

The Clean Architecture is inspired from the Hexagonal Architecture and from the Domain-Driven Design. So read the related books to fully understand their concepts.

# Project
This project will illustrate a simple car shop web application.

On this web application, a user can :
- Register
- Login
- Logout
- Put one of his car for sale
- View all cars that are for sale
- Add a car from another user into the cart
- View the cart
- Remove a car from the cart
- Buy all the car that are in the cart

# Domain and bounded context
For simplicity, we will have just one domain and one bounded context.

We could have split into several domains but it is not the goal of this project to illustrate the Domain-Driven Design stategic patterns.

A user has an Id, a name, login and password.
A car has a brand name, model name and only one owner.
The owner of the car is the user that created it or bought it from another user.
When a user wants to sell his car, he has to put a price for the car.
When a user buys a car, he becomes the owner of this car.

# Structure
The project contains 2 main folders:
- backend: the backend code
- frontend: the frontend code
