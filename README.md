# movie_api

- Deployed app link: https://enigmatic-river-99618.herokuapp.com/

## Description

The server-side component of the myFlix web application. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.

## Key features

- Return a list of ALL movies to the user
- Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user
- Return data about a genre (description) by name/title (e.g., “Thriller”)
- Return data about a director (bio, birth year, death year) by name
- Allow new users to register
- Allow users to update their user info (username, password, email, date of birth)
- Allow users to add a movie to their list of favorites
- Allow users to remove a movie from their list of favorites
- Allow existing users to deregister

## Blueprint and Techstack

This app utilizes a RESTful API to store and display movie and user information using the MERN stack.

### Database: Mongo

### Server: Node.js, requiring Express

### Frontend: React ([GitHub repo](https://github.com/christopherinvans/myFlix-client)), Angular ([GitHub repo](https://github.com/christopherinvans/myFlix-Angular-client))

- The API uses middleware modules, such as the body-parser package (for reading data from requests) and morgan for logging.
- The business logic modeled with Mongoose.
- The API provides movie information in JSON format.
- The API is tested in Postman.
- The API includes user authentication and authorization code.
- The API includes data validation logic.
