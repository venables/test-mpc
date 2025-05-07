# test mpc-tss

## Installation

If you don't have pnpm, just run `corepack enable` from your terminal before installing.

```sh
pnpm install
```

Copy the `.env.example` file to `.env` and fill with your Dynamic keys.

## Running the demo

```sh
pnpm dev
```

If you remove `"type": "module"` from `package.json` things work.


## Building

You can compile to JS using

```sh
pnpm build
```

And then run that code by:

```sh
pnpm start
```