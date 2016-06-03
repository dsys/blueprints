# ==============================================================================
# config

.PHONY: all build clean debug install lint push run test

TAG ?= latest
DOCKER_PREFIX ?= pavlov/{{0}}
DOCKER_TAG ?= $(DOCKER_PREFIX):$(TAG)

all: run

# ==============================================================================
# phony targets

build: | node_modules
	docker build -t $(DOCKER_TAG) .

clean:
	@- rm -rf node_modules

debug: | node_modules
	@ ./node_modules/.bin/babel-node-debug src/index.js

install:
	@ npm install

lint: | node_modules
	@ ./node_modules/.bin/standard

push: build
	docker push $(DOCKER_TAG)

run: | node_modules
	@ ./node_modules/.bin/nodemon ./node_modules/.bin/babel-node src/index.js

test: | node_modules
	@ ./node_modules/.bin/jest --watch

# ==============================================================================
# file targets

node_modules:
	npm install
