dev:
	docker-compose -f docker-compose.base.yml -f docker-compose.dev.yml up

prod:
	docker-compose -f docker-compose.base.yml -f docker-compose.prod.yml up --build client server