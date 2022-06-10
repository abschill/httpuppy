all: build runtests

dev-ts:
	yarn build:watch

build:
	yarn build

runtests:
	./scripts/run/coverage

dev-example:
	yarn run-ex
