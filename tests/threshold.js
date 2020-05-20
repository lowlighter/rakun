//Dependancies
  const fs = require("fs").promises
  const path = require("path")
  const axios = require("axios")
  const xml = require("xml2json")
  const git = require("simple-git/promise")(path.join(__dirname, ".."))
  const argv = require("minimist")(process.argv.slice(2), {
    alias:{t:"threshold"},
    default:{threshold:"85%"}
  })
  require("colors")

//Process
;(async function () {
  //Parse results
    const results = JSON.parse(await fs.readFile(path.join(__dirname, "results.json")))
    const {coverage} = JSON.parse(xml.toJson(await fs.readFile(path.join(__dirname, "coverage/clover.xml"))))

  //Compute threshold, success rate and coverage
    const threshold = Number(argv.threshold.replace("%", ""))||0
    const success = 100*results.numPassedTests/results.numTotalTests
    const covered = 100*coverage.project.metrics.coveredelements/coverage.project.metrics.elements

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
          rakun_coverage:`${covered.toFixed(1).padStart(3)}%`,
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
    console.log(`Coverage     : ${covered.toFixed(1).padStart(3)}%`)
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