import { isVowel, matchCase } from "./helpers"
import { LangDef, AppliedRule, LetterRange } from "./types"

export class Transkribator {
  def: LangDef
  alphabet: string[]
  appliedRules: AppliedRule[]
  debug: boolean
  constructor(def: LangDef, debug = false) {
    this.def = def
    this.alphabet = Object.keys(this.def.dict)
    this.appliedRules = []
    this.debug = debug
  }

  transcribe(input = "") {
    input = input.normalize()
    const words = input.split(" ")
    let output = input
    for (let word of words) {
      word = this.clean(word)
      output = output.replace(word, this.transcribeWord(word))
    }
    const { appliedRules, def } = this
    return { output, appliedRules, from: def.from, to: def.to }
  }

  transcribeWord(word = "") {
    const chars = word.trim().split("")
    return chars.reduce((result, char, pos, chars) => {
      const newChar =
        this.getRuleBasedChar(char, pos, chars, word) ??
        this.getDictChar(char) ??
        char
      return result + matchCase(newChar, char, word)
    }, "")
  }

  getRuleBasedChar(char: string, pos: number, chars: string[], word: string) {
    const charAtPos = (delta: number) => this.normalize(chars[pos + delta])
    const args = {
      c: this.normalize(char),
      w: this.normalize(word),
      char,
      charAtPos,
      prev: charAtPos(-1),
      next: charAtPos(+1),
      isVowel,
    }
    if (this.debug) console.log(args)
    for (const rule of this.def.rules || []) {
      const { desc: description, cond, val, range = [0, 1] } = rule
      if (cond(args)) {
        const affectedLetters: LetterRange = [pos + range[0], pos + range[1]]
        const appliedRule = { description, word, affectedLetters }
        if (description) this.appliedRules.push(appliedRule)
        return val
      }
    }
  }

  getDictChar(char: string) {
    return this.def.dict[char.toLowerCase()]
  }

  normalize(charOrStr = "") {
    const inAlphabet = new RegExp(`[${this.alphabet.join()}]`, "i")
    return charOrStr.match(inAlphabet) ? charOrStr.toLowerCase() : ""
  }

  clean(str: string): string {
    const punctationAtEnd = new RegExp(`([^${this.alphabet.join()}]+)$`, "ig")
    return str.replace(punctationAtEnd, "")
  }
}
