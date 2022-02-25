ba:
	sudo docker-compose -f ./webapp/docker-compose.yml build
sa:
	sudo docker-compose -f ./webapp/docker-compose.yml up -d
ra:
	sudo docker-compose -f ./webapp/docker-compose.yml restart

bg:
	sudo docker-compose -f ./webapp/docker-compose.yml build go

ss:
	sudo docker-compose -f ./webapp/docker-compose.yml up
	sudo docker-compose -f ./proxy/docker-compose.yml up

sg:
	sudo docker-compose -f ./webapp/docker-compose.yml build go
	sudo docker-compose -f ./webapp/docker-compose.yml up -d go
rg:
	sudo docker-compose -f ./webapp/docker-compose.yml build go
	sudo docker-compose -f ./webapp/docker-compose.yml restart go

sr:
	sudo docker-compose -f ./webapp/docker-compose.yml build react
	sudo docker-compose -f ./webapp/docker-compose.yml up -d react

rn:
	sudo docker-compose -f ./webapp/docker-compose.yml restart nginx

lp:
	sudo docker-compose -f ./proxy/docker-compose.yml logs -t -f
lw:
	sudo docker-compose -f ./webapp/docker-compose.yml logs -t -f


n:
	docker-compose nginx restart
c:
	docker system prune
