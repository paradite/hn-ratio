#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_new_data() {
  git checkout -b master
  git add . 
  git commit --message "New Data via Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin https://${GITHUB_TOKEN}@github.com/paradite/hn-ratio.git > /dev/null 2>&1
  git push --quiet --set-upstream origin master
}

setup_git
commit_new_data
upload_files