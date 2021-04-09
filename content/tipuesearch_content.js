var tipuesearch = {"pages": [{'title': 'Call for Code', 'text': '動機: \n \n 利用三種雲端程式技術部署協同網站內容 - 所需程式技術 Python + Flask + Github + Heroku + RedHat Openshift cloud site \n 利用機構觸動冷氣與照明電源開關進行機械式控制, 並透過電子感測器與各實驗室排課時間表協助開關控制 \n 網際簡報連同分組網站部署在三套雲端主機, 也可在無網路情況下以近端動態或靜態網站進行簡報 \n 分組網誌內容透過 Oauth2 相關雲端授權程式, 可將 Pelican 網誌內容同步至 Google Blogger 增加內容備份與曝光範圍 \n 利用 Arduino 與 Raspberry Pi 微控制卡整合環境感測並採網際遠端監控機電式開關 \n 利用跨平台手機 Flutter 程式 app 與無線網路, 連結微控制機電系統上的伺服器程式, 對省電開關模組進行監控 \n \n 近端動態網站編輯: \n \n Heroku 同步網站 app 部署: \n \n RedHat PHP App build: \n \n RedHat Openshift and Github Pages \n http://taiwan-no-1-git-heroku5-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/content/index.html \n 將 Github Pages 的網站部署到  Heroku  與  RedHat Openshift \n 與上述 Openshift 上的網站同步: \n https://taiwan-no1.herokuapp.com \n https://heroku5.github.io/taiwan-no1 \n 三個雲端網站同步部署流程: \n \n 主要倉儲位於:  https://github.com/heroku5/taiwan-no1 \n 透過 Github Pages 設定完成:  https://heroku5.github.io/taiwan-no1 \n 透過 Heroku CLI 將近端倉儲在 Heroku 登入狀態下以  heroku git:remote -a taiwan-no1 設定 git remote add 後, 再透過 git push heroku 將資料同步至 Heroku 雲端主機  https://taiwan-no1.herokuapp.com   \n RedHad Openshift 部分則使用 Topology, 點選 php app 後 Start build, 就能從  https://github.com/heroku5/taiwan-no1.git  取得倉儲內容後完成 build , 透過兩段網站跳轉, 從 index.php 跳至 index.html 再跳轉至靜態網站 content/index.html, 完成  http://taiwan-no-1-git-heroku5-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/content/index.html \n', 'tags': '', 'url': 'Call for Code.html'}, {'title': '建立雲端網站', 'text': '將參賽 Call for Code 的網站採協同編輯方式部署在 Github Pages, Heroku app 與 RedHat Openshift app 上. \n \n 參賽網站 \n 參賽網際簡報 \n 參賽網誌 (含網誌內容同步至 Blogger) \n \n', 'tags': '', 'url': '建立雲端網站.html'}, {'title': '參賽題目', 'text': 'For more Energy Save - Formosa Energy Save - 攏係為著省能源 \n', 'tags': '', 'url': '參賽題目.html'}, {'title': '專案執行流程', 'text': '執行流程: \n \n 以機械按鈕式及手機遠端模式自動根據各實驗室排課時段進行監控 \n 從學校教務主機取出機械設計工程系綜一館各實習實驗室的排課時間表 \n 根據時間表配置冷氣與照明開關的電源開關控制模組 \n 從手機或瀏覽器對各控制模組進行監控 \n \n 相關技術: \n \n 綜一館歷年用電統計分析 \n 以 AJAX POST 從學校教務主機取出各實驗室的排課時間表 \n 開關控制模組機構設計與製作 \n Arduino or Raspberry Pi based 機電資整合開關控制模組製作 \n Rasberry Pi 上的 Python Flask 網際伺服器程式配置 \n Flutter based Android 與 IOS based App 製作 \n \n', 'tags': '', 'url': '專案執行流程.html'}, {'title': 'Heroku', 'text': '本網站網址: \n https://heroku5.github.io/taiwan-no1 \n https://taiwan-no1.herokuapp.com \n 假如在命令列中輸入 heroku login -i 時出現: \n Error: getaddrinfo ENOTFOUND api.heroku.com api.heroku.com:443 問題 \n 請參見  https://github.com/heroku/cli/issues/1305', 'tags': '', 'url': 'Heroku.html'}]};