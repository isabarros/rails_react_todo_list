# TODO List
To Do List app for created using React and Ruby on Rails

## How to run the project
1. Install [docker](https://docs.docker.com/engine/install/#server) and [docker-compose](https://docs.docker.com/compose/install/)
2. Run `docker-compose build`
3. Run `docker-compose up`
4. In another terminal run open the project root folder and run `docker-compose run web bundle exec rake db:create` to create the databases

## How to run database migrations
1. You need to have your application up and running (`docker-compose up`)
2. In another terminal execute `docker-compose run web bundle exec rake db:migrate`

(note: in case permission denied while trying to connect to the Daemon not `sudo chmod 666 /var/run/docker.sock`)
(note2: https://docs.docker.com/engine/install/linux-postinstall/#configure-docker-to-start-on-boot)