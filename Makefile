install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish

publish-test:
	npm publish --dry-run

lint:
	npx eslint .
