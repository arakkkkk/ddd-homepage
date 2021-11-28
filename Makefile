b:
	sudo docker-compose -f ./proxy/docker-compose.yml build
	sudo docker-compose -f ./webapp/docker-compose.yml build
s:
	sudo docker-compose -f ./proxy/docker-compose.yml up -d
	sudo docker-compose -f ./webapp/docker-compose.yml up -d
r:
	sudo docker-compose -f ./proxy/docker-compose.yml restart
	sudo docker-compose -f ./webapp/docker-compose.yml restart


# b proxy:
# 	docker-compose -f ./proxy/docker-compose.yml build
# b webapp:
# 	docker-compose -f ./webapp/docker-compose.yml build
# s proxy:
# 	docker-compose -f ./proxy/docker-compose.yml up -d
# s webapp:
# 	docker-compose -f ./webapp/docker-compose.yml up -d
# r proxy:
# 	docker-compose -f ./proxy/docker-compose.yml restart
# r webapp:
# 	docker-compose -f ./webapp/docker-compose.yml restart
# l proxy:
# 	docker-compose -f ./proxy/docker-compose.yml logs -t -f
l:
	sudo docker-compose -f ./webapp/docker-compose.yml logs -t -f


n:
	docker-compose nginx restart
c:
	docker system prune
