yarn build
git add .
git commit -m "build for next release"
git push origin master
yarn deploy:storybook
RELEASE=1 && np --no-publish --yolo