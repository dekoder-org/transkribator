import { Transkribator } from "../src/transkribator.ts"
import { ru } from "../src/langs/russian.ts"

test("clean method removes punctuation from string end", () => {
  const t = new Transkribator(ru[0])
  const result = t.clean("Александр,")
  expect(result).toBe("Александр")
})
