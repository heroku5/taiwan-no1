var tipuesearch = {"pages": [{'title': 'Call for Code', 'text': '構想: \n \n 利用三種雲端程式技術部署協同網站內容 - 所需程式技術 Python + Flask + Github + Heroku + RedHat Openshift cloud site \n 利用機構觸動冷氣與照明電源開關進行機械式控制, 並透過電子感測器與各實驗室排課時間表協助開關控制 \n 網際簡報連同分組網站部署在三套雲端主機, 也可在無網路情況下以近端動態或靜態網站進行簡報 \n 分組網誌內容透過 Oauth2 相關雲端授權程式, 可將 Pelican 網誌內容同步至 Google Blogger 增加內容備份與曝光範圍 \n 利用 Arduino 與 Raspberry Pi 微控制卡整合環境感測並採網際遠端監控機電式開關 \n 利用跨平台手機 Flutter 程式 app 與無線網路, 連結微控制機電系統上的伺服器程式, 對省電開關模組進行監控 \n \n 近端動態網站編輯: \n \n Heroku 同步網站 app 部署: \n \n RedHat PHP App build: \n \n RedHat Openshift and Github Pages \n http://taiwan-no-1-git-heroku5-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/content/index.html \n 將 Github Pages 的網站部署到  Heroku  與  RedHat Openshift \n 與上述 Openshift 上的網站同步: \n https://taiwan-no1.herokuapp.com \n https://heroku5.github.io/taiwan-no1 \n 三個雲端網站同步部署流程: \n \n 主要倉儲位於:  https://github.com/heroku5/taiwan-no1 \n 透過 Github Pages 設定完成:  https://heroku5.github.io/taiwan-no1 \n 透過 Heroku CLI 將近端倉儲在 Heroku 登入狀態下以  heroku git:remote -a taiwan-no1 設定 git remote add 後, 再透過 git push heroku 將資料同步至 Heroku 雲端主機  https://taiwan-no1.herokuapp.com   \n RedHad Openshift 部分則使用 Topology, 點選 php app 後 Start build, 就能從  https://github.com/heroku5/taiwan-no1.git  取得倉儲內容後完成 build , 透過兩段網站跳轉, 從 index.php 跳至 index.html 再跳轉至靜態網站 content/index.html, 完成  http://taiwan-no-1-git-heroku5-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/content/index.html \n', 'tags': '', 'url': 'Call for Code.html'}, {'title': '建立雲端網站', 'text': '將參賽 Call for Code 的網站採協同編輯方式部署在 Github Pages, Heroku app 與 RedHat Openshift app 上. \n \n 參賽網站 \n 參賽網際簡報 \n 參賽網誌 (含網誌內容同步至 Blogger) \n \n', 'tags': '', 'url': '建立雲端網站.html'}, {'title': '參賽題目', 'text': 'For more Energy Saving - Formosa Energy Saving - 攏係為著省能源 - 攏係為著節能', 'tags': '', 'url': '參賽題目.html'}, {'title': '專案執行流程', 'text': '執行流程: \n \n 以機械按鈕式及手機遠端模式自動根據各實驗室排課時段進行監控 \n 從學校教務主機取出機械設計工程系綜一館各實習實驗室的排課時間表 \n 根據時間表配置冷氣與照明開關的電源開關控制模組 \n 從手機或瀏覽器對各控制模組進行監控 \n \n 相關技術: \n \n 綜一館歷年用電統計分析 \n 以 AJAX POST 從學校教務主機取出各實驗室的排課時間表 \n 開關控制模組機構設計與製作 \n Arduino or Raspberry Pi based 機電資整合開關控制模組製作 \n Rasberry Pi 上的 Python Flask 網際伺服器程式配置 \n Flutter based Android 與 IOS based App 製作 \n \n', 'tags': '', 'url': '專案執行流程.html'}, {'title': 'Presentation', 'text': '網際簡報 - 可以直接利用瀏覽器經由網路或隨身碟上的靜態網站中的 reveal 頁面進行簡報. \n https://revealjs.com/ \n 使用 Reveal.js 製作網頁簡報  \n https://ithelp.ithome.com.tw/articles/10185467  (中文) \n https://github.com/hakimel/reveal.js/wiki/Articles-&-Tutorials \n https://ibcomputing.com/build-presentations-with-reveal-js-and-markdown/ \n https://dev.to/emmabostian/how-to-build-a-captivating-presentation-using-html-css--javascript-nno \n https://4comprehension.com/github-actions-reveal-js-and-automating-pdf-conversion/  ', 'tags': '', 'url': 'Presentation.html'}, {'title': 'IBM', 'text': '利用 heroku5 At mde dot tw 建立  https://www.ibm.com/tw-zh/cloud/free  免費試用版, 同時也建立  https://openshift.com  30 天免費試用帳號 (2021/04/10 - 2021/05/9) \n Essentials of Application Development on IBM Cloud.pdf \n Introduction-to-IBM-Cloud-Pak-for-Integration-.pdf \n IBM cloud: \n https://cloud.ibm.com/ \n IBM cloud shell 可以選擇主機位置: 東京, 達拉斯, 法蘭克福等三處. \n \n Watson studio: \n 我們能用 Watson studio 做什麼? ( Watson assistant 說明 ) \n 利用 Watson assistant 建立使用客戶服務助理, 回答專案用戶的各種問題解答. \n 接受使用者對控制專制的  speech 轉 text 服務 \n 或  text 轉 speech 服務 \n \n 免費用戶權限: \n 1 個授權使用者 每月 50 個容量單位小時限制 環境 = 每小時需要 # 個容量單位  1 vCPU + 4 GB RAM = 0.5 2 vCPU + 8 GB RAM = 1  4 vCPU + 16 GB RAM = 2 決策最佳化 = 環境 + 5 精簡方案服務將在無活動達到 30 天之後予以刪除', 'tags': '', 'url': 'IBM.html'}, {'title': 'Watson assistant', 'text': 'https://github.com/watson-developer-cloud/assistant-simple \n https://github.com/AlexHartford/ibm_watson_assistant \n https://github.com/IBM/watson-assistant-slots-intro \n https://github.com/IBM/watson-online-store   \n', 'tags': '', 'url': 'Watson assistant.html'}, {'title': 'Flutter', 'text': 'Flutter and Arduino: \n https://medium.com/@TimMcDon4ld/using-flutter-and-arduino-to-control-appliances-b8fcd61b220 \n Flutter and IBM Watson assistant: \n https://github.com/dbbd59/flutter-ibm-watson-assistant', 'tags': '', 'url': 'Flutter.html'}, {'title': 'Flask', 'text': 'https://medium.com/analytics-vidhya/deploy-ml-models-using-flask-as-rest-api-and-access-via-flutter-app-7ce63d5c1f3b   \n', 'tags': '', 'url': 'Flask.html'}, {'title': 'Heroku', 'text': '本網站網址: \n https://heroku5.github.io/taiwan-no1 \n https://taiwan-no1.herokuapp.com \n 假如在命令列中輸入 heroku login -i 時出現: \n Error: getaddrinfo ENOTFOUND api.heroku.com api.heroku.com:443 問題 \n 請參見  https://github.com/heroku/cli/issues/1305', 'tags': '', 'url': 'Heroku.html'}]};