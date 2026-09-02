#!/bin/sh
# 停止並刪除舊 container
echo "=== 1. 清理舊的 Container ==="
docker stop node-api2 || true
docker rm -f node-api2 || true

# 設定 Windows 實體路徑
WIN_TARGET_PATH="C:/docker/projects/node"

# 啟動 Container
echo "=== 2. 啟動 Container ==="
docker run -d \
  --name node-api2 \
  -p 3000:3000 \
  -v "${WIN_TARGET_PATH}":/usr/src/app \
  josezhang0210/node-api2 \
  sh -c "npm install && npm run dev"

echo "=== 3. 檢查狀態 ==="
sleep 5
docker ps -a -f name=node-api2
docker logs node-api2
