const { runTests } = require("./_tester.js")

const deTests = [
  ["Namen1", "Валянцін Акудовіч", "de", "Valjanzin Akudowitsch"],
  ["Namen2", "Віктар Бабарыка", "de", "Viktar Babaryka"],
]

const enTests = [
  [
    "",
    "Аляксандр Рыгоравіч Лукашэнка",
    "en",
    "Alyaksandr Ryhoravich Lukashenka",
  ],
]

const sciTests = [["", "Грушэўская", "scientific", "Hrušėŭskaja"]]

runTests([...deTests, ...enTests, ...sciTests], "be")
