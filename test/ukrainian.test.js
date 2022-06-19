const { runTests } = require("./_tester.js")

const deTests = [
  [
    "Hruschewsky",
    "Михайло Сергійович Грушевський",
    "de",
    "Mychailo Serhijowytsch Hruschewsky",
  ],
  ["’", "бур’ян", "de", "burjan"],
  ["ьо", "багатьох", "de", "bahatjoch"],
  ["Namen1", "Валентина", "de", "Valentyna"],
]

// https://pasport.org.ua/vazhlivo/transliteratsiya
const enTests = [
  ["є", "Єнакієве Гаєвич", "en", "Yenakiieve Haievych"],
  ["ї", "Їжакевич Мар’їне", "en", "Yizhakevych Marine"],
  ["й", "Йосипівка Олексій", "en", "Yosypivka Oleksii"],
  ["ю", "Юрій Корюківка", "en", "Yurii Koriukivka"],
  ["я", "Ярошенко Феодосія", "en", "Yaroshenko Feodosiia"],
  ["зг", "Згорани Розгон", "en", "Zghorany Rozghon"],
  ["’", "бур’ян", "en", "burian"],
]

const sciTests = [["’", "бур’ян", "scientific", "bur’jan"]]

runTests([...deTests, ...enTests, ...sciTests], "uk")
