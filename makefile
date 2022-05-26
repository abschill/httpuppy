all: build test node-example

dev-ts:
	yarn build:watch

build:
	yarn build

test:
	yarn test

dev-example:
	yarn run-ex
