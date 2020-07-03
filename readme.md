# simple express.js skeleton application
good for somebody who isn't sure how it all fits together and needs a starting point for making web applications in node.js.

#### it uses the following key components:
 * `express` for handling routes
 * `sequelize` as the database orm
 * `redis` for session store
 * `webpack` for bundling frontend assets

#### quickstart
```shell
git clone https://github.com/engineer-man/express-mvc-skeleton
cd express-mvc-skeleton
docker-compose up
```
then open http://127.0.0.1:8000 in your browser

#### other essential commands
```shell
# access container running your app
docker-compose exec app /bin/bash

# access mysql
docker-compose exec mysql mysql -uroot -proot
```
#### outline of project structure
```
|- controllers # these are for handling routes
|- frontend    # contains js, jsx, less files to be bundled for the frontend
|- models      # these are for accessing your db
|- public      # all non-routes get served from here
|- var         # variable data for variable purposes
|- views       # these are your templates, controllers will render them
```
