FROM golang:1.24.4

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

# ソースコードをコピー
COPY . .

# アプリケーションのビルド
RUN go build -o main .

# コンテナ起動時に実行されるコマンド
CMD ["./main"]
