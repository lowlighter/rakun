//Dependancies
  const fs = require("fs")
  const path = require("path")
  const colors = require("colors")
  const axios = require("axios")
  const git = require("simple-git/promise")(path.join(__dirname, ".."))
  const argv = require("minimist")(process.argv.slice(2), {
    alias:{t:"threshold"},
    default:{threshold:"90%"}
  })

//Process
;(async function () {
  //Parse results
    const results = JSON.parse(fs.readFileSync(path.join(__dirname, "results.json")))

  //Compute threshold and success rate
    const threshold = Number(argv.threshold.replace("%", ""))||0
    const success = 100*results.numPassedTests/results.numTotalTests

  //Update result
    if ((process.env.BADGES_TOKEN)&&((await git.status()).current) === "master") {
      console.log(``)
      console.log(`BADGES_TOKEN : defined`)
      console.log(`Branch       : master`)
      try {
        await axios.post("https://badges.lecoq.io/memory", {
          token:process.env.BADGES_TOKEN,
          rakun_tests_passed:results.numPassedTests,
          rakun_tests_total:results.numTotalTests,
          rakun_tests_accuracy:`${success.toFixed(1).padStart(3)}%`,
        })
        console.log(`Update badge : success`)
        console.log(``)
      } 
      catch (error) {
        console.log(`Update badge : failed`.orange)
        console.log(`${error.response}`.red)
        console.log(``)
      }
    }

  //Verdict
    console.log(``)
    console.log(`Success rate : ${success.toFixed(1).padStart(3)}%`)
    console.log(`Threshold    : ${threshold.toFixed(1).padStart(3)}%`)
    console.log(``)
    if (success >= threshold) {
      console.log(`Result       : pass`.green)
      process.exit(0)
    }
    else {
      console.log(`Result       : failed`.red)
      process.exit(1)
    }
})()