all: build test-foobar

build:
	yarn build

test-foobar:
	yarn test --foo=bar
