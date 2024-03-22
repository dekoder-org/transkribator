import { transcribe } from "../src/index"

test("transcribe should return an object when showDetails is true", () => {
  const result = transcribe("Жёлтый чёрный", { showDetails: true })
  expect(typeof result).toBe("object")
})

it("transcribe should return a string when showDetails is false or unset", () => {
  const result = transcribe("Жёлтый чёрный")
  expect(typeof result).toBe("string")
})