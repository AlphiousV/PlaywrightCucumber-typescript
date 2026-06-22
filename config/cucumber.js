module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    // paths: [
    //   "src/features/**/*.feature"
    // ],
    publishQuiet: true,
    dryRun: false,
    require: [
      "src/support/world.ts",   // ← ADDED: must load first
      "src/support/hooks.ts",
      "src/steps/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
     "pretty",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    parallel: 1
  },
};