import key from "./cypress/fixtures/applitoolsKey.json"
module.exports = {
  testConcurrency: 1,
  apiKey: key.applitoolsKey,
  browser: [
      {width: 800, height: 600, name: 'chrome'},
  ],
  // set batch name to the configuration
  batchName: 'First Test with Applitools'
}