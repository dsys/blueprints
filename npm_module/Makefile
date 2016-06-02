# ==============================================================================
# config

.PHONY: default build clean format install lint publish test

default: test

# ==============================================================================
# phony targets

build:
	./node_modules/.bin/babel src --ignore __tests__,__mocks__ --out-dir dist

clean:
	@- rm -rf node_modules

format: | node_modules
	./node_modules/.bin/standard --format src/**/*.js

install:
	npm install

lint: | node_modules
	./node_modules/.bin/standard

publish: build
	npm publish

test: | node_modules
	./node_modules/.bin/jest --watch

# ==============================================================================
# file targets

node_modules:
	npm install
