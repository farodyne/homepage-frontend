# Author: Federico Engler
#
# Simple makefile to define build targets that are easy to remember.

# Install the dependencies.
deps:
	npm install --no-optional

# Run the development server.
dev:
	npm run dev	

# Package the application.
build:
	npm run build