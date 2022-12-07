# HTTPuppy

![](https://github.com/abschill/httpuppy/raw/workspaces/.assets/logo.png)

A simple & speedy abstraction layer for node web servers :dog:

## Features

- simple, easy to use api
- worker thread support for :fire: blazing fast response times
- middleware support
- router support
- static directory serving
- exposes underlying node HTTP API for full customization, just adds helpers
- command line interface
- static typed, very handy intellisense
- familiar express style

## Installation

```cmd
npm i httpuppy
```

```cmd
yarn add httpuppy
```

## Command Line Use

```
npx httpuppy --serve path/to/files
```

create static dev server which is mounted at `path/to/files` by default on port 3000

- [Examples](https://github.com/abschill/httpuppy/wiki/Examples)
- [Wiki](https://github.com/abschill/httpuppy/wiki/)
