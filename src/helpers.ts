const VOWELS = ["а", "е", "є", "ё", "и", "і", "ї", "о", "у", "ы", "ю", "э", "я"]

export function isVowel(char: string) {
  return VOWELS.includes(char)
}

export function matchCase(char = "", compareChar = "", word = "") {
  return isUpperCase(word)
    ? char.toUpperCase()
    : isUpperCase(compareChar)
      ? capitalizeFirst(char)
      : char
}

function isUpperCase(str: string) {
  return str === str.toUpperCase()
}

function capitalizeFirst(str: string) {
  const [first, ...rest] = str
  if (!first) return ""
  return [first.toUpperCase(), ...rest].join("")
}
