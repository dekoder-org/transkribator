const { runTests } = require("./_tester.js")

const deTests = [
  ["е", "Елена", "de", "Jelena"],
  ["чё", "Жёлтый чёрный", "de", "Sholty tschorny"],
  ["ьи", "Ильич", "de", "Iljitsch"],
  ["ого/его", "чёрного третьего!", "de", "tschornowo tretjewo!"],
  ["Namen", "Александр Валентина.", "de", "Alexander Valentina."],
  ["Namen II", "Сергей и Андрей", "de", "Sergej i Andrej"]
]

const enTests = []

const sciTests = [["ъ/ь", "объехать", "scientific", "obʺechatʹ"]]

runTests([...deTests, ...enTests, ...sciTests], "ru")
