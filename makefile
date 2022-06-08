all: build runtests

dev-ts:
	yarn build:watch

build:
	yarn build

runtests:
	yarn test && ./scripts/run-coverage

dev-example:
	yarn run-ex
