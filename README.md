# My API

This is my version of the TrueCoders Your Own API project.

## Database

You will need to set up a MySQL schema named "dragonballz" with two tables named "characters" and "logs". The "characters" table will need columns named "ID", "Name", "HomePlanet", "Age", and "Gender". The "logs" table will need columns named "ID" and "Request". Set the ID column as an auto-incrementing primary key.

You can use the following SQL code to add 10 characters to the database to get started with:

```sql
INSERT INTO characters (Name, HomePlanet, Age, Gender) VALUES
('Goku', 'Earth', 35, 'Male'),
('Vegeta', 'Vegeta', 36, 'Male'),
('Piccolo', 'Namek', 27, 'Male'),
('Bulma', 'Earth', 32, 'Female'),
('Gohan', 'Earth', 17, 'Male'),
('Trunks', 'Earth', 14, 'Male'),
('Goten', 'Earth', 12, 'Male'),
('Chi-Chi', 'Earth', 39, 'Female'),
('Frieza', 'Unknown', NULL, 'Male'),
('Cell', 'Unknown', NULL, 'Male');
```

## .env

You will also need to provide a .env file in the root of the project in the following format:

```env
PORT=<desired port>
HOST=<host>
DB_HOST=<host for MySql to use (see below)>
DB_USER=<your MySql username>
DB_PASS=<your MySql password>
DB_SCHEMA=dragonballz
```

These must be set to the appropriate values to access your database (I had to set DB_HOST to "127.0.0.1" in order to access the app on localhost but you may just use the same value as HOST).

## Routes

The app has 3 valid HTML routes which provide information about the API as well as a form for adding characters to the database. There are two api routes that allow full CRUD operations on the characters table of the database and that allow for logging requests to the logs table and viewing the requests stored there.

You can send a GET request to /routes to get a JSON object with a list of the available routes which are as follows:

```json
{
  "/": {
    "GET": "Returns the home page as HTML."
  },
  "/about": {
    "GET": "Returns the about page as HTML."
  },
  "/add-character": {
    "GET": "Returns the add-character page as HTML"
  },
  "/healthcheck": {
    "GET": "Returns a status of 200."
  },
  "/routes": {
    "GET": "Returns this JSON object."
  },
  "/api": {
    "/characters": {
      "GET": "Returns all characters as JSON in the format: {ID, Name, HomePlanet, Age, Gender}.",
      "POST": "Adds one character to the database. The body must contain an object in the format {Name, HomePlanet, Age, Gender}",
      "/:id": {
        "GET": "Returns one character with the corresponding id as JSON in the format {ID, Name, HomePlanet, Age, Gender}.",
        "PUT": "Updates one character with the corresponding id. The body of the request must be in the format {Name, HomePlanet, Age, Gender}",
        "DELETE": "Removes one character with the corresponding id."
      }
    },
    "/requests": {
      "GET": "Returns a log of all requests made to the server in JSON in the format: {ID, Request}"
    }
  }
}
```
