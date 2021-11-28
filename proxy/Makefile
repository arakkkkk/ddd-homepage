
b:
	docker-compose -f ./docker-compose.yml build
s:
	docker-compose -f ./docker-compose.yml up
r:
	docker-compose -f ./docker-compose.yml restart
c:
	docker volume rm (docker volume ls -qf dangling=true)


create_service:
	curl -X POST -H "Content-Type: application/json" -d '{"title": "title", "comment":"comment", "show":"true", "grouped":"false"}' localhost/api/services/create

get_service:
	curl 'localhost/api/services/get/1'

list_service:
	curl 'localhost/api/services/list'

signup:
	curl -X POST -H "Content-Type: application/json" -d '{"name": "admin", "password":"admin"}' localhost/api/signup

login:
	curl -X POST -H "Content-Type: application/json" -d '{"name": "admin", "password":"admin"}' localhost/api/login

test:
	watch -n 3 "curl 'localhost/api/services/list/all' | jq"
