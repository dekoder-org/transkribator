function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "transcribe", () => $20dd7fc7127fd575$export$6479b296c537a758);
const $8e32e43a7091c4b4$export$df8169a6258d50c7 = {
    desc: "\u0435 -> je am Wortanfang, nach \u044C / \u044A / Vokalen",
    cond: ({ c: c , prev: prev , isVowel: isVowel  })=>c === "\u0435" && (isVowel(prev) || [
            "",
            "\u044C",
            "\u044A"
        ].includes(prev)),
    val: "je",
    range: [
        -1,
        1
    ]
};
const $8e32e43a7091c4b4$export$d827822e4858809f = [
    {
        desc: "\u043A\u0441 -> x",
        cond: ({ c: c , next: next  })=>c === "\u043A" && next === "\u0441",
        val: "x",
        range: [
            0,
            2
        ]
    },
    {
        cond: ({ c: c , prev: prev  })=>c === "\u0441" && prev === "\u043A",
        val: ""
    }, 
];
const $8e32e43a7091c4b4$export$dde5208fce538b35 = {
    desc: "\u0441 -> ss zwischen zwei Vokalen",
    cond: ({ c: c , isVowel: isVowel , prev: prev , next: next  })=>c === "\u0441" && isVowel(prev) && isVowel(next),
    val: "ss",
    range: [
        -1,
        2
    ]
};
const $8e32e43a7091c4b4$export$ebc19a8c8453432e = [
    {
        desc: "\u0439 -> j zwischen zwei Vokalen",
        cond: ({ c: c , prev: prev , next: next , isVowel: isVowel  })=>c === "\u0439" && isVowel(prev) && isVowel(next),
        val: "j",
        range: [
            -1,
            2
        ]
    },
    {
        desc: "\u044C\u0438 -> ji, \u044C\u043E -> jo",
        cond: ({ c: c , next: next  })=>c === "\u044C" && [
                "i",
                "\u0438",
                "\u043E"
            ].includes(next),
        val: "j",
        range: [
            0,
            2
        ]
    }, 
];


const $abe7c46a92b87843$export$51b138e5a065c2bb = [
    {
        from: "be",
        to: "de",
        dict: {
            а: "a",
            б: "b",
            в: "w",
            г: "h",
            д: "d",
            е: "e",
            ё: "jo",
            ж: "sh",
            з: "s",
            і: "i",
            й: "i",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ў: "u",
            ф: "f",
            х: "ch",
            ц: "z",
            ч: "tsch",
            ш: "sch",
            ы: "y",
            ь: "",
            э: "e",
            ю: "ju",
            я: "ja"
        },
        rules: [
            (0, $8e32e43a7091c4b4$export$df8169a6258d50c7),
            ...(0, $8e32e43a7091c4b4$export$d827822e4858809f),
            (0, $8e32e43a7091c4b4$export$dde5208fce538b35),
            ...(0, $8e32e43a7091c4b4$export$ebc19a8c8453432e),
            {
                desc: "\u0439 nicht wiedergegeben nach \u044B und \u0456",
                cond: ({ c: c , prev: prev  })=>c === "\u0439" && [
                        "\u044B",
                        "\u0456"
                    ].includes(prev),
                val: "",
                range: [
                    -1,
                    1
                ]
            },
            {
                desc: "V statt W am Wortbeginn (gebr\xe4uchliche Namensschreibung)",
                cond: ({ c: c , w: w  })=>c === "\u0432" && !!w.match(/^(валянцін|віктар|веранік)/i),
                val: "v"
            }, 
        ]
    },
    {
        from: "be",
        to: "en",
        dict: {
            а: "a",
            б: "b",
            в: "v",
            г: "h",
            д: "d",
            е: "e",
            ё: "yo",
            ж: "zh",
            з: "z",
            і: "i",
            й: "i",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ў: "u",
            ф: "f",
            х: "kh",
            ц: "ts",
            ч: "ch",
            ш: "sh",
            ы: "y",
            ь: "",
            э: "e",
            ю: "yu",
            я: "ya"
        }
    },
    {
        from: "be",
        to: "scientific",
        dict: {
            а: "a",
            б: "b",
            в: "v",
            г: "h",
            д: "d",
            е: "e",
            ё: "\u0451",
            ж: "\u017E",
            з: "z",
            і: "i",
            й: "j",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ў: "\u016D",
            ф: "f",
            х: "ch",
            ц: "c",
            ч: "\u010D",
            ш: "\u0161",
            ы: "y",
            ь: "\u02B9",
            э: "\u0117",
            ю: "ju",
            я: "ja",
            "'": "\u2019",
            "\u2019": "\u2019",
            ʼ: "\u2019"
        }
    }, 
];



const $a19f47988367cb6a$export$cf48009033a0126b = [
    {
        from: "ru",
        to: "de",
        dict: {
            а: "a",
            б: "b",
            в: "w",
            г: "g",
            д: "d",
            е: "e",
            ё: "jo",
            ж: "sh",
            з: "s",
            и: "i",
            й: "i",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ф: "f",
            х: "ch",
            ц: "z",
            ч: "tsch",
            ш: "sch",
            щ: "schtsch",
            ъ: "",
            ы: "y",
            ь: "",
            э: "e",
            ю: "ju",
            я: "ja"
        },
        rules: [
            (0, $8e32e43a7091c4b4$export$df8169a6258d50c7),
            ...(0, $8e32e43a7091c4b4$export$d827822e4858809f),
            (0, $8e32e43a7091c4b4$export$dde5208fce538b35),
            ...(0, $8e32e43a7091c4b4$export$ebc19a8c8453432e),
            {
                desc: "\u0439 nicht wiedergegeben nach \u044B und \u0438",
                cond: ({ c: c , prev: prev  })=>c === "\u0439" && [
                        "\u044B",
                        "\u0438"
                    ].includes(prev),
                val: "",
                range: [
                    -1,
                    1
                ]
            },
            {
                desc: "\u0451 -> o nach \u0436 / \u0447 / \u0448 / \u0449",
                cond: ({ c: c , prev: prev  })=>c === "\u0451" && [
                        "\u0436",
                        "\u0447",
                        "\u0448",
                        "\u0449"
                    ].includes(prev),
                val: "o",
                range: [
                    -1,
                    1
                ]
            },
            {
                desc: "-\u043E\u0433\u043E/-\u0435\u0433\u043E -> -owo/-ewo am Wortende",
                cond: ({ c: c , prev: prev , next: next , charAtPos: charAtPos  })=>c === "\u0433" && [
                        "\u0435",
                        "\u043E"
                    ].includes(prev) && next === "\u043E" && charAtPos(2) === "",
                val: "w",
                range: [
                    -1,
                    2
                ]
            },
            {
                desc: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 -> Alexander (gebr\xe4uchliche Namensschreibung)",
                cond: ({ c: c , w: w  })=>c === "\u0434" && w === "\u0430\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440",
                val: "de",
                range: [
                    0,
                    2
                ]
            },
            {
                desc: "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 -> Dimitri (gebr\xe4uchliche Namensschreibung)",
                cond: ({ c: c , w: w  })=>c === "\u0434" && w === "\u0434\u043C\u0438\u0442\u0440\u0438\u0439",
                val: "di",
                range: [
                    0,
                    2
                ]
            },
            {
                desc: "j statt i am Wortende (gebr\xe4uchliche Namensschreibung)",
                cond: ({ c: c , w: w  })=>c === "\u0439" && [
                        "\u0430\u043B\u0435\u043A\u0441\u0435\u0439",
                        "\u0441\u0435\u0440\u0433\u0435\u0439"
                    ].includes(w),
                val: "j"
            },
            {
                desc: "V statt W am Wortbeginn (gebr\xe4uchliche Namensschreibung)",
                cond: ({ c: c , w: w  })=>c === "\u0432" && !!w.match(/^(валентин|виктор|вероник)/i),
                val: "v"
            }, 
        ]
    },
    {
        from: "ru",
        to: "en",
        dict: {
            а: "a",
            б: "b",
            в: "v",
            г: "g",
            д: "d",
            е: "e",
            ё: "yo",
            ж: "zh",
            з: "z",
            и: "i",
            й: "i",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ф: "f",
            х: "kh",
            ц: "ts",
            ч: "ch",
            ш: "sh",
            щ: "sch",
            ъ: "",
            ы: "i",
            ь: "",
            э: "e",
            ю: "yu",
            я: "ya"
        }
    },
    {
        from: "ru",
        to: "scientific",
        dict: {
            а: "a",
            б: "b",
            в: "v",
            г: "g",
            д: "d",
            е: "e",
            ё: "\u0451",
            ж: "\u017E",
            з: "z",
            и: "i",
            й: "j",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ф: "f",
            х: "ch",
            ц: "c",
            ч: "\u010D",
            ш: "\u0161",
            щ: "\u0161\u010D",
            ъ: "\u02BA",
            ы: "y",
            ь: "\u02B9",
            э: "\u0117",
            ю: "ju",
            я: "ja",
            "'": "\u2019",
            "\u2019": "\u2019",
            ʼ: "\u2019"
        }
    }, 
];



const $874c57a16644b1af$export$312745a8a3013c00 = [
    {
        from: "uk",
        to: "de",
        dict: {
            а: "a",
            б: "b",
            в: "w",
            г: "h",
            ґ: "g",
            д: "d",
            е: "e",
            є: "e",
            ж: "sh",
            з: "s",
            и: "y",
            і: "i",
            ї: "ji",
            й: "i",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ф: "f",
            х: "ch",
            ц: "z",
            ч: "tsch",
            ш: "sch",
            щ: "schtsch",
            ь: "",
            ю: "ju",
            я: "ja",
            "'": "",
            "\u2019": "",
            "\u02BC": ""
        },
        rules: [
            {
                desc: "\u0454 -> je am Wortanfang, nach \u044C und Vokalen",
                cond: ({ c: c , prev: prev , isVowel: isVowel  })=>c === "\u0454" && (isVowel(prev) || [
                        "",
                        "\u044C"
                    ].includes(prev)),
                val: "je",
                range: [
                    -1,
                    1
                ]
            },
            ...(0, $8e32e43a7091c4b4$export$d827822e4858809f),
            (0, $8e32e43a7091c4b4$export$dde5208fce538b35),
            {
                desc: "\u0439 nicht wiedergegeben nach \u0438",
                cond: ({ c: c , prev: prev  })=>c === "\u0439" && prev === "\u0438",
                val: "",
                range: [
                    -1,
                    1
                ]
            },
            ...(0, $8e32e43a7091c4b4$export$ebc19a8c8453432e),
            {
                desc: "V statt W am Wortbeginn (gebr\xe4uchliche Namensschreibung)",
                cond: ({ c: c , w: w  })=>c === "\u0432" && !!w.match(/^(валентин|віктор|веронік)/i),
                val: "v"
            }
        ]
    },
    {
        from: "uk",
        to: "en",
        dict: {
            а: "a",
            б: "b",
            в: "v",
            г: "h",
            ґ: "g",
            д: "d",
            е: "e",
            є: "ie",
            ж: "zh",
            з: "z",
            и: "y",
            і: "i",
            ї: "i",
            й: "i",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ф: "f",
            х: "kh",
            ц: "ts",
            ч: "ch",
            ш: "sh",
            щ: "shch",
            ь: "",
            ю: "iu",
            я: "ia",
            "'": "",
            "\u2019": "",
            "\u02BC": ""
        },
        rules: [
            {
                desc: "\u0454 -> ye at the beginning of the word",
                cond: ({ c: c , prev: prev  })=>c === "\u0454" && prev === "",
                val: "ye"
            },
            {
                desc: "\u0457 -> yi at the beginning of the word",
                cond: ({ c: c , prev: prev  })=>c === "\u0457" && prev === "",
                val: "yi"
            },
            {
                desc: "\u0439 -> y at the beginning of the word",
                cond: ({ c: c , prev: prev  })=>c === "\u0439" && prev === "",
                val: "y"
            },
            {
                desc: "\u044E -> yu at the beginning of the word",
                cond: ({ c: c , prev: prev  })=>c === "\u044E" && prev === "",
                val: "yu"
            },
            {
                desc: "\u044F -> ya at the beginning of the word",
                cond: ({ c: c , prev: prev  })=>c === "\u044F" && prev === "",
                val: "ya"
            },
            {
                desc: "\u0437\u0433 -> zgh",
                cond: ({ c: c , prev: prev  })=>c === "\u0433" && prev === "\u0437",
                val: "gh",
                range: [
                    -1,
                    1
                ]
            }
        ]
    },
    {
        from: "uk",
        to: "scientific",
        dict: {
            а: "a",
            б: "b",
            в: "v",
            г: "h",
            ґ: "g",
            д: "d",
            е: "e",
            є: "je",
            ж: "\u017E",
            з: "z",
            и: "y",
            і: "i",
            ї: "ji",
            й: "j",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ф: "f",
            х: "ch",
            ц: "c",
            ч: "\u010D",
            ш: "\u0161",
            щ: "\u0161\u010D",
            ь: "\u02B9",
            ю: "ju",
            я: "ja",
            "'": "\u2019",
            "\u2019": "\u2019",
            "\u02BC": "\u2019"
        }
    }, 
];


const $e36ad76879845ca0$var$VOWELS = [
    "\u0430",
    "\u0435",
    "\u0454",
    "\u0451",
    "\u0438",
    "\u0456",
    "\u0457",
    "\u043E",
    "\u0443",
    "\u044B",
    "\u044E",
    "\u044D",
    "\u044F"
];
function $e36ad76879845ca0$export$8111e1eeaad1861d(char) {
    return $e36ad76879845ca0$var$VOWELS.includes(char);
}
function $e36ad76879845ca0$export$539e7ee389f27fc6(char = "", compareChar = "", word = "") {
    return $e36ad76879845ca0$var$isUpperCase(word) ? char.toUpperCase() : $e36ad76879845ca0$var$isUpperCase(compareChar) ? $e36ad76879845ca0$var$capitalizeFirst(char) : char;
}
function $e36ad76879845ca0$var$isUpperCase(str) {
    return str === str.toUpperCase();
}
function $e36ad76879845ca0$var$capitalizeFirst(str) {
    const [first, ...rest] = str;
    if (!first) return "";
    return [
        first.toUpperCase(),
        ...rest
    ].join("");
}


class $a0435daf1d7be95a$export$5af97e1f35ce3ad3 {
    constructor(def, debug = false){
        this.def = def;
        this.alphabet = Object.keys(this.def.dict);
        this.appliedRules = [];
        this.debug = debug;
    }
    transcribe(input = "") {
        input = input.normalize();
        const words = input.split(" ");
        let output = input;
        for (let word of words){
            word = this.clean(word);
            output = output.replace(word, this.transcribeWord(word));
        }
        const { appliedRules: appliedRules , def: def  } = this;
        return {
            output: output,
            appliedRules: appliedRules,
            from: def.from,
            to: def.to
        };
    }
    transcribeWord(word = "") {
        const chars1 = word.trim().split("");
        return chars1.reduce((result, char, pos, chars)=>{
            const newChar = (this.getRuleBasedChar(char, pos, chars, word) ?? this.getDictChar(char)) ?? char;
            return result + (0, $e36ad76879845ca0$export$539e7ee389f27fc6)(newChar, char, word);
        }, "");
    }
    getRuleBasedChar(char, pos, chars, word) {
        const charAtPos = (delta)=>this.normalize(chars[pos + delta]);
        const args = {
            c: this.normalize(char),
            w: this.normalize(word),
            char: char,
            charAtPos: charAtPos,
            prev: charAtPos(-1),
            next: charAtPos(1),
            isVowel: $e36ad76879845ca0$export$8111e1eeaad1861d
        };
        if (this.debug) console.log(args);
        for (const rule of this.def.rules || []){
            const { desc: description , cond: cond , val: val , range: range = [
                0,
                1
            ]  } = rule;
            if (cond(args)) {
                const affectedLetters = [
                    pos + range[0],
                    pos + range[1]
                ];
                const appliedRule = {
                    description: description,
                    word: word,
                    affectedLetters: affectedLetters
                };
                if (description) this.appliedRules.push(appliedRule);
                return val;
            }
        }
    }
    getDictChar(char) {
        return this.def.dict[char.toLowerCase()];
    }
    normalize(charOrStr = "") {
        const inAlphabet = new RegExp(`[${this.alphabet.join()}]`, "i");
        return charOrStr.match(inAlphabet) ? charOrStr.toLowerCase() : "";
    }
    clean(str) {
        const punctationAtEnd = new RegExp(`([^${this.alphabet.join()}]+)$`, "ig");
        return str.replace(punctationAtEnd, "");
    }
}


const $20dd7fc7127fd575$var$DEFS = [
    ...(0, $abe7c46a92b87843$export$51b138e5a065c2bb),
    ...(0, $a19f47988367cb6a$export$cf48009033a0126b),
    ...(0, $874c57a16644b1af$export$312745a8a3013c00)
];
const $20dd7fc7127fd575$var$DEFAULT_OPTIONS = {
    from: "ru",
    to: "en",
    showDetails: false
};
function $20dd7fc7127fd575$export$6479b296c537a758(input = "", _options = {}) {
    const options = {
        ...$20dd7fc7127fd575$var$DEFAULT_OPTIONS,
        ..._options
    };
    const { from: from , to: to , showDetails: showDetails , debug: debug  } = options;
    const langDef = $20dd7fc7127fd575$var$DEFS.find((d)=>d.from === from && d.to === to);
    if (!langDef) {
        console.error(`No language module ${from}-${to} found`);
        const result = {
            output: input,
            appliedRules: [],
            from: from,
            to: to
        };
        return showDetails ? result : result.output;
    }
    const result = new (0, $a0435daf1d7be95a$export$5af97e1f35ce3ad3)(langDef, !!debug).transcribe(input);
    return showDetails ? result : result.output;
}


//# sourceMappingURL=main.js.map
