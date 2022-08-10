# Examples of packages which don't work with `ssr.noExternal`

The build is done into a sibling folder (no-external-test-prod) to simulate copying the built code to the production server.
- run `npm run build`
- `cp package.json ../no-external-test-prod` (package.json with type=module needs to be available to run the server)
- `node ../no-external-test-prod`

