const { transcribe } = require("../dist/transkribator.cjs")

const { appliedRules } = transcribe("Ксения", { to: "de", showDetails: true })

test("Check if correct applied rules are returned", () => {
  expect(appliedRules.length).toBe(1)
  const rule = appliedRules[0]
  expect(rule.description).toBe("кс -> x")
  expect(rule.word).toBe("Ксения")
  const highlightStr = highlight(rule.word, rule.affectedLetters)
  expect(highlightStr).toBe("_Кс_ения")
})

function highlight(word, highlightRange = [0, 0]) {
  const [from, to] = highlightRange
  return `${word.slice(0, from)}_${word.slice(from, to)}_${word.slice(to)}`
} 
