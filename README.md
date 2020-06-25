# TODO List
To Do List app for created using React and Ruby on Rails

## How to run the project
1. Install [docker](https://docs.docker.com/engine/install/#server) and [docker-compose](https://docs.docker.com/compose/install/)
1. Run `make run`
1. In another terminal open the project root folder and run `make create-database` to create the databases

## How to run database migrations
1. You need to have your application up and running (`docker-compose up`)
1. In another terminal execute `docker-compose run web bundle exec rake db:migrate`

## How to populate db with seed data
Run `docker-compose run web bundle exec rake db:seed`

## Troubleshooting Docker on Linux
(note: in case permission denied while trying to connect to the Daemon `sudo chmod 666 /var/run/docker.sock`)
(note2: https://docs.docker.com/engine/install/linux-postinstall/#configure-docker-to-start-on-boot)
