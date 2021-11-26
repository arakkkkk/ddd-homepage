FROM golang:alpine
COPY ./go-app /go/src/go-app
WORKDIR /go/src/go-app

# RUN go get -u github.com/gin-gonic/gin
# RUN go get github.com/gin-contrib/sessions
# RUN go get github.com/gin-contrib/sessions/cookie
# RUN go get github.com/go-sql-driver/mysql
# RUN go get github.com/jinzhu/gorm

# CMD []
RUN go build -o main main.go
CMD /go/src/go-app/main
