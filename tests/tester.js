//Imports
  const {default:rakun} = require(require("path").join(__dirname, "..", "dist/build/rakun"))
  if (global.single)
    test.skip("Skipping", () => void(0))

//Exports
  module.exports = function (testable) {
    //Tester
      const tester = () => expect(rakun.parse(testable.filename)).toEqual(testable)
    //Apply test single
      if (global.single) {
        if (testable.only) {
          delete testable.only
          test.only(testable.filename, tester)
        }
        return
      }
    //Clean tests
      console.debug = () => null
      delete testable.only
    //Apply test
      test(testable.filename, tester)
  }
