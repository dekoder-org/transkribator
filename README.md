# Transkribator

Cyrillic to Latin converter. Takes Belarusian, Russian and Ukranian text and outputs its representation in German, English or scientific transliteration.

See our [live demo at dekoder.org](https://www.dekoder.org/de/article/schreibs-wie-dekoder).

![Transkribator Example Image](https://www.dekoder.org/sites/default/files/transkribator_uk_0.png)

## Install 

```
npm install transkribator
```

## Usage

```js
import { transcribe } from "transkribator"

transcribe("Грушевський Михайло Сергійович", { from: "uk", to: "en" })
// returns "Hrushevskyi Mykhailo Serhiiovych"
```

Or in the browser:

```html
<script src="https://unpkg.com/transkribator"></script>
<script>
  transcribe("Валянцін Акудовіч", { from: "be", to: "scientific" })
  // returns "Valjancin Akudovič"
</script>
```

## Options

The transcribe function accepts an object with the following optional settings as a second argument: 

property | default value | description
--- | --- | ---
from | `"ru"` | ISO-Code of the source language (can be `"be"`, `"ru"` or `"uk"`)
to | `"en"` | ISO-Code of the target language (can be `"de"`, `"en"` or `"scientific"`)
showDetails | `false` | if set to `true` the function returns an object with more detailed information about the applied rules (see below).

## Transcription/transliteration standards

The German transcription rules are based on the [Duden recommendations](https://de.wikipedia.org/wiki/Umschrift_des_ukrainischen_kyrillischen_Alphabets#Tabellen_zu_den_verschiedenen_Umschrift-_und_Romanisierungsvarianten).

Ukrainian to English is converted according to the official [Ukrainian passport transliteration](https://pasport.org.ua/faq/transliteration). (See [cyrillic-to-translit-js](https://github.com/greybax/cyrillic-to-translit-js) for another implementation).

For scientific transliterations checkout this [handout](https://slavistik.phil-fak.uni-koeln.de/fileadmin/slavistik/Mitarbeiter/Buncic/translit.pdf) from the Slavic Department of the University of Cologne.

## Advanced usage

Learn more about the applied rules with the `showDetails` option:

```js
const result = transcribe("М. Сергійович Грушевський", { from: "uk", to "de", showDetails: true })
const { output, appliedRules } = result
console.log(output)
// "M. Serhijowytsch Hruschewsky"

for (const rule of appliedRules) {
  const { description, word, affectedLetters } = rule
  console.log(`– ${description} (${word})`)
}
// – й -> j zwischen zwei Vokalen (Сергійович)
// – й nicht wiedergegeben nach и (Грушевський)
```
