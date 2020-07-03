# simple express.js skeleton application
good for somebody who isn't sure how it all fits together and needs a starting point for making web applications in node.js.

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
