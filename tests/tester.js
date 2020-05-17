//Imports
  const {default:rakun} = require(require("path").join(__dirname, "..", "dist/rakun"))

//Exports
  module.exports = function (testable) {
    //Tester
      const tester = () => expect(rakun.parse(testable.filename)).toEqual(testable)
    //Hide loggers
      console.debug = () => null
    //Apply test (only)
      if (testable.only) {
        delete testable.only
        test.only(testable.filename, tester)
      }
    //Apply test
      else
        test(testable.filename, tester)
  }
