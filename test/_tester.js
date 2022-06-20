const { transcribe } = require("../dist/index.cjs")

exports.runTests = async function runTests(tests = [], from) {
  for (const tst of tests) {
    const [name, input, to, expectedOutput, _overrideOpts = {}] = tst
    const options = { from, to, ..._overrideOpts }
    const output = transcribe(input, options)
    test(`${name}: ${input} (${from}) -> ${output} (${to})`, () => {
      expect(output).toBe(expectedOutput)
    })
  }
}
