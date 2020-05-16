// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

  module.exports = {

    //A set of global variables that need to be available in all test environments
      globals: {},

    //The test environment that will be used for testing
      testEnvironment: "node",

    //The glob patterns Jest uses to detect test files
      testMatch: [
        "**/tests/cases/**.js",
      ],

  }