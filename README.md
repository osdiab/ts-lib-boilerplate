# ts-lib-boilerplate

Boilerplate to get started writing a library in TypeScript

**DISCLAIMER:** I just made this for myself since I do this over and over again, so if
you use this dependencies might go out of date or your functionality will
probably be missing. Be warned!

## Get started

With `node` and `yarn` installed on your machine,

1. Fork this repo
1. Run `yarn install`
1. Update `package.json` to have your package name, description, etc
1. Get coding!

## Features

### Coding

Write code in `src/`, publish it to NPM with `npm publish`.

- If you use VSCode, TypeScript errors will show up automatically. 
- To typecheck/build code manually, run `yarn build`
- FYI there's no "start" script since libraries aren't necesssarily cli utilities 
  (test your code out by writing tests), follow tutorials to figure that out
  (hint: the `bin` property is what makes it possible)

### Testing

Write tests in files matching `test/**/*.test.ts`. Run `yarn test:unit`.

Config is set up so that tests can import code in src as `@src/path/to/module`,
but code in `src` cannot import code from `test`.

### Linting

Run `yarn lint`. 

Optionally, if you're using VSCode, config is already present to lint your code
on save - go to the Extensions tab, under Recommended you'll see a linter
extension, and the workspace config automaticaly will enable auto fixing errors.

### Publishing

Running `npm publish` will automatically build, test, and lint your code,
concurrently for speed. If anything fails it will prevent the build from getting
published.