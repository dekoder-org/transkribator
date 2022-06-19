import { Rule } from "../types"

export const jeRule: Rule = {
  desc: "е -> je am Wortanfang, nach ь / ъ / Vokalen",
  cond: ({ c, prev, isVowel }) =>
    c === "е" && (isVowel(prev) || ["", "ь", "ъ"].includes(prev)),
  val: "je",
  range: [-1, 1],
}

export const xRules: Rule[] = [
  {
    desc: "кс -> x",
    cond: ({ c, next }) => c === "к" && next === "с",
    val: "x",
    range: [0, 2],
  },
  {
    cond: ({ c, prev }) => c === "с" && prev === "к",
    val: "",
  },
]

export const sRule: Rule = {
  desc: "с -> ss zwischen zwei Vokalen",
  cond: ({ c, isVowel, prev, next }) =>
    c === "с" && isVowel(prev) && isVowel(next),
  val: "ss",
  range: [-1, 2],
}

export const jRules: Rule[] = [
  {
    desc: "й -> j zwischen zwei Vokalen",
    cond: ({ c, prev, next, isVowel }) =>
      c === "й" && isVowel(prev) && isVowel(next),
    val: "j",
    range: [-1, 2],
  },
  {
    desc: "ьи -> ji, ьо -> jo",
    cond: ({ c, next }) => c === "ь" && ["i", "и", "о"].includes(next),
    val: "j",
    range: [0, 2],
  },
]
