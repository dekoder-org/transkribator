const { transcribe } = require("../dist/index.cjs")


test("Check if correct applied rules are returned", () => {
  const { appliedRules } = transcribe("Ксения", { to: "de", showDetails: true })
  expect(appliedRules.length).toBe(1)
  const rule = appliedRules[0]
  expect(rule.description).toBe("кс -> x")
  expect(rule.word).toBe("Ксения")
  const highlightStr = highlight(rule.word, rule.affectedLetters)
  expect(highlightStr).toBe("_Кс_ения")
})

test("Adjust affectedLetters range at beginning of the Word (Jelena)", () => {
  const { appliedRules } = transcribe("Елена", { to: "de", showDetails: true })
  expect(appliedRules.length).toBe(1)
  const { word, affectedLetters } = appliedRules[0]
  const [rangeFrom, rangeTo] = affectedLetters
  expect(rangeFrom).toBe(0)
  expect(rangeTo).toBe(1)
  const highlightStr = highlight(word, affectedLetters)
  expect(highlightStr).toBe("_Е_лена")
})

function highlight(word, highlightRange = [0, 0]) {
  const [from, to] = highlightRange
  return `${word.slice(0, from)}_${word.slice(from, to)}_${word.slice(to)}`
}
