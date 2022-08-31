import data from "../testData.json";

const wordList: Word[] = data.wordList as Word[];

interface Word {
    id: number,
    pos: "adverb" | "verb" | "noun" | "adjective",
    word: string
}

// Creating object with the words types as fields to use in generating the baised random list of words

let sortedWordList: {
    adverb: Word[],
    verb: Word[],
    noun: Word[],
    adjective: Word[],
} = {
    adverb: [],
    verb: [],
    noun: [],
    adjective: [],
}

// Populating the object with the words by type
for (const wordObj of wordList) {
    sortedWordList[wordObj.pos].push(wordObj)
}



/*

Example of sortedWordList Object
{
    adverb: [
      { id: 1, word: 'slowly', pos: 'adverb' },
      { id: 15, word: 'heavily', pos: 'adverb' }
    ],
    verb: [
      { id: 2, word: 'ride', pos: 'verb' },
      { id: 4, word: 'commute', pos: 'verb' },
      { id: 6, word: 'walk', pos: 'verb' },
      { id: 11, word: 'emit', pos: 'verb' }
    ],
    noun: [
      { id: 3, word: 'bus', pos: 'noun' },
      { id: 5, word: 'emissions', pos: 'noun' },
      { id: 8, word: 'car', pos: 'noun' },
      { id: 10, word: 'arrival', pos: 'noun' },
      { id: 14, word: 'lane', pos: 'noun' }
    ],
    adjective: [
      { id: 7, word: 'fast', pos: 'adjective' },
      { id: 9, word: 'crowded', pos: 'adjective' },
      { id: 12, word: 'independent', pos: 'adjective' },
      { id: 13, word: 'convenient', pos: 'adjective' }
    ]
}
*/

// ---------------------------------------------------------------------------

// Getting random list of words with algorithm baised to get equal number of words from each type

export default function getWords(wordsCount: number = 10) {

    const pos = ["adverb", "verb", "noun", "adjective"] as const;

    let wordsToSend: Word[] = []

    // Getting structured clone from the generated object
    let sortedWordListClone: typeof sortedWordList = JSON.parse(JSON.stringify(sortedWordList));


    // Algorithm loop will end when the wordsToSend array be populated with 10 words
    while (wordsToSend.length < (wordsCount)) {


        // loop over the words types to get approximately equal number of words of each type
        for (let p of pos) {


            // Shuffling the array of certain type
            let searchArray = shuffleArray(sortedWordListClone[p])

            // Will insert one element to wordsToSend array
            for (const el of searchArray) {

                // If the current word already exists in the wordsToSend array will be skiped 
                // otherwise will be selected
                if (wordsToSend.find(wordObj => wordObj.id === el.id)) {
                    continue;
                }
                wordsToSend.push(el)
                // Check if the wordsToSend already has 10 words then will shuffle and return it
                // otherwise will skip to the next word type
                if (wordsToSend.length === wordsCount) { return shuffleArray(wordsToSend) }
                break;
            }

        }


    }
    // shuffle the list and return it
    return shuffleArray(wordsToSend)
}


// Helper generic function to shuffle array of type T

function shuffleArray<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}