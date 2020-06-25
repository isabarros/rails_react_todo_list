build:
	docker-compose build

run: build
	docker-compose up

create-database:
	docker-compose run web bundle exec rake db:create
