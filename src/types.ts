export type SourceLang = "be" | "ru" | "uk"
export type TargetLang = "de" | "en" | "scientific"

export interface UserOptions {
  from?: SourceLang
  to?: TargetLang
  showDetails?: boolean
  debug?: boolean
}

export interface Options {
  from: SourceLang
  to: TargetLang
  showDetails?: boolean
  debug?: boolean
}

export interface LangDef {
  from: SourceLang
  to: TargetLang
  dict: TranslitDict
  rules?: Rule[]
}

export interface TranslitDict {
  [key: string]: string
}

export interface Rule {
  desc?: string
  cond: (obj: RuleConditionProps) => boolean
  val: string
  range?: LetterRange
}

export interface RuleConditionProps {
  c: string
  w: string
  prev: string
  next: string
  charAtPos: (pos: number) => string
  isVowel: (str: string) => boolean
}

export type LetterPos = number
export type LetterRange = [LetterPos, LetterPos]

export interface AppliedRule {
  description: string | undefined
  word: string
  affectedLetters: LetterRange
}

export interface Result {
  output: string
  appliedRules: AppliedRule[]
  from: SourceLang
  to: TargetLang
}
