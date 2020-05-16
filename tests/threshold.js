//Dependancies
  const fs = require("fs")
  const path = require("path")
  const colors = require("colors")
  const argv = require("minimist")(process.argv.slice(2), {
    alias:{t:"threshold"},
    default:{threshold:"80%"}
  })

//Parse results
  const results = JSON.parse(fs.readFileSync(path.join(__dirname, "results.json")))

//Compute threshold and success rate
  const threshold = Number(argv.threshold.replace("%", ""))
  const success = 100*results.numPassedTests/results.numTotalTests

//Verdict
  console.log(`Success rate : ${success.toString().padStart(3)}%`)
  console.log(`Threshold    : ${threshold.toString().padStart(3)}%`)
  console.log(``)
  if (success >= threshold) {
    console.log(`Result       : pass`.green)
    process.exit(0)
  }
  else {
    console.log(`Result       : failed`.red)
    process.exit(1)
  }
  