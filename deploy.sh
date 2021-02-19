yarn build &&
git checkout gh-pages &&
rm -rf *.html *.json *.css *.json *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git status && 
git commit -m 'update' &&
git push