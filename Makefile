b:
	docker-compose -f ./proxy/docker-compose.yml build
	docker-compose -f ./webapp/docker-compose.yml build
s:
	docker-compose -f ./proxy/docker-compose.yml up -d
	docker-compose -f ./webapp/docker-compose.yml up -d
r:
	docker-compose -f ./proxy/docker-compose.yml restart
	docker-compose -f ./webapp/docker-compose.yml restart


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
	docker-compose -f ./webapp/docker-compose.yml logs -t -f


n:
	docker-compose nginx restart
c:
	docker system prune
