## DX

Run Docker containers

## Install

```
npm i @cloud-cli/dx
```

## Usage

```bash
cy dx.list
cy dx.prune
cy dx.pull --image node:latest
cy dx.add --name node-app --image node:latest --volumes 'volume:/container/path' --port '8080' --domain 'foo.example.com'
cy dx.start --name node-app --env 'FOO=bar'
cy dx.logs --name node-app
cy dx.stop --name node-app
cy dx.remove --name node-app
```
