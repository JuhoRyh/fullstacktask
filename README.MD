# FullStack Task

## Setup and running FullStack Task

After cloning the codebase from the repository, you need to update the environment variables and create and seed the database.

1. Install [PostgreSQL](https://www.postgresql.org/download/)
2. Create a .env file in the project root based on .env.tmpl with correct database variables
3. Install dependencies

        npm install

4. In the project root, run

        npm run db:create

    or otherwise create an empty database matching the variables in .env file

5. The project uses [Knex](http://knexjs.org/) to manage the database. Install Knex globally to be able to run migrations and seeds

        npm install knex -g

6. Create database tables by running

        knex migrate:latest

7. Add initial data to database tables by running

        knex seed:run

8. Create a .env file in the client folder based on .env.tmpl with the url your server will run on (example: http://localhost:3001/api/)
9. Build the client by running

        npm run build

10. Run app

        npm start
