# Examples of packages which don't work with `ssr.noExternal`

The build is done into a sibling folder (no-external-test-prod) to simulate copying the built code to the production server.

Run `npm run build`, then `cp package.json ../no-external-test-prod` since a package.json with type=module needs to be available to run the server. Don't run `npm install as necessary code should be bundled due to `ssr.noExternal`. 

Finally run `node ../no-external-test-prod`.
