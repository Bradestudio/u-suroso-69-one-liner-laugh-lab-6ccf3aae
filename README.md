# One-Liner Laugh Lab — "Filed Under Crumbs"

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node-22-green)](https://nodejs.org/)

Entry for the [One-Liner Laugh Lab bounty](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae) on [make.fun](https://make.fun/?ref=qjs4e9sj).

## The line

> I didn't eat your sock — I filed it under 'crumbs', and the dustbin does not take appeals.

One line, 90 characters, answering the prompt: the excuse a robot vacuum gives after eating a sock. The vacuum doesn't apologise or admit hunger — it files the sock under "crumbs" and closes the door on appeals.

## How it works

`main.ts` (Node 22, no dependencies, no network) validates the line against the gate — 1–200 Unicode code points, non-whitespace, single line — then writes it atomically (temp file + fsync + rename) to `/output/entry.txt` and verifies it with a byte-for-byte read-back.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
