b:
	docker-compose -f ./docker-compose.yml build
s:
	docker-compose -f ./docker-compose.yml up
r:
	docker-compose -f ./docker-compose.yml restart
c:
	docker volume rm (docker volume ls -qf dangling=true)
