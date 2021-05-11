# NOT MAINTAINED.

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

Write code in `src/`.

- If you use VSCode, TypeScript errors will show up automatically. 
- To typecheck/build code manually, run `yarn build`
- Sourcemaps and declarations are present out of the box
- FYI there's no "start" script since libraries aren't necesssarily cli utilities 
  (test your code out by writing tests), follow tutorials to figure that out
  (hint: the `bin` property is what makes it possible)

### Testing

Write tests in files matching `test/**/*.test.ts`. Run `yarn test:unit`. (The
`yarn test` command also runs lint)

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

## A note on using modern JS
Be careful of using bleeding edge JavaScript code - while language syntax
features like `async`/`await`, `rest` and `spread` (`...`) syntax are easily
supported by TypeScript, it doesn't guarantee that standard library features
like `fetch`, `Promise`, or `Array.includes` will be present for your users.
Bundling polyfills with your library is a bad idea since it bloats your library with
code your users may not want.

So keep in mind who your library is for, and use the runtime features present
for those users.

- Need to support old browsers? Add `dom` to the `tsconfig.json` `lib` property
  so you can access browser stuff in your code, but don't add the `@types/node`
  dependency.
- Or only new versions of node? Maybe `es6` is fine to add to `lib`!
