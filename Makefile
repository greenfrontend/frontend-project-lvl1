install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish-test:
	npm publish --dry-run
