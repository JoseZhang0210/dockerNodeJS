測試用 Docker 跑 Jenkins 自動將 Node.js 專案與 image 整合建立 container
1. 用 Docker 開啟 Jenkins
   ```bash
    docker run -d --name jenkins -e "TZ=Asia/Taipei" -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v C:/docker/projects:/var/jenkins_home/workspace --user root jenkins/jenkins:lts
   ```
3. 建立 Free-Style 軟體專案作業
4. 原始碼管理選擇 `Git`, Repository URL 填入本專案 URL
5. 選擇 Build Steps, 執行 Shell 填入 sh deploy.sh
