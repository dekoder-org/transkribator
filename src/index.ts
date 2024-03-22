import { be } from "./langs/belarusian"
import { ru } from "./langs/russian"
import { uk } from "./langs/ukrainian"
import { Transkribator } from "./transkribator"
import { TranscribeReturnType, Options, UserOptions, Result } from "./types"

const DEFS = [...be, ...ru, ...uk]
const DEFAULT_OPTIONS: Options = { from: "ru", to: "en", showDetails: false }

export function transcribe<T extends UserOptions = {}>(
  input = "",
  _options: T = {} as T,
): TranscribeReturnType<T> {
  const options = { ...DEFAULT_OPTIONS, ..._options }
  const { from, to, showDetails, debug } = options
  const langDef = DEFS.find((d) => d.from === from && d.to === to)
  if (!langDef) {
    console.error(`No language module ${from}-${to} found`)
    const result: Result = { output: input, appliedRules: [], from, to }
    return (showDetails ? result : result.output) as TranscribeReturnType<T>
  }
  const result: Result = new Transkribator(langDef, !!debug).transcribe(input)
  return (showDetails ? result : result.output) as TranscribeReturnType<T>
}
