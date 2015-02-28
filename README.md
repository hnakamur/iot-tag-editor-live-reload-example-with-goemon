riot-tag-editor-live-reload-example-with-goemon
===============================================

A tag-editor custom tag example with [Riot 2.0 | A React- like UI library](https://muut.com/riotjs/).
A browser live-reload support is provided with [mattn/goemon](https://github.com/mattn/goemon).

## Pre-compiled demo
You can try a pre-compiled demo at https://hnakamur.github.io/riot-tag-editor-live-reload-example-with-goemon/demo/

## Setup

- Install node.js and npm: [Node.js](http://nodejs.org/)
- Install riot globally: `npm install -g riot`
- Install go: [Getting Started - The Go Programming Language](http://golang.org/doc/install)
- Set [the GOPATH environment variable](https://golang.org/doc/code.html#GOPATH)
- Install [mattn/goemon](https://github.com/mattn/goemon) with the following command.

```
go get -u github.com/mattn/goemon/...
```

The command file `goemon` will be installed in `$GOPATH/bin`.

## Run

```
goemon go run main.go
```

- Open http://localhost:3000
- Edit files in `assets/` directory and see your browser to be livereloaded automatically!


## License
MIT
