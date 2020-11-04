echo 'Preparation start.' &&
git submodule add https://github.com/JavierCervilla/portfolio_projects.git projects &&
  cp .portfolio/EN/*.md projects/EN && cp .portfolio/ES/*.md projects/ES && cp .portfolio/images/*.jpg projects/images/
  cd projects && git add . && git commit -m"[+] Push Readme and Images to Portfolio" && git push origin master && cd .. && rm -rf projects
