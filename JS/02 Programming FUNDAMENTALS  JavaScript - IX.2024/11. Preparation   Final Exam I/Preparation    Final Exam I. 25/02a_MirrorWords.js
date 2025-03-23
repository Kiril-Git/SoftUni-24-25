function pairWordsIdentifier(inputArr) {
    const text = inputArr[0];
    const regex = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

    const matches = [...text.matchAll(regex)];
    const mirrored = [];

    if (matches.length === 0) {
        console.log("No word pairs found!");
        console.log("No mirror words!");
        return;
    }

    for (let match of matches) {
        const word1 = match[2];
        const word2 = match[3];
        if (word1 === word2.split('').reverse().join('')) {
            mirrored.push(`${word1} <=> ${word2}`);
        }
    }

    console.log(`${matches.length} word pairs found!`);

    if (mirrored.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrored.join(', '));
    }
}



pairWordsIdentifier([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )






    // Print:                      5 word pairs found!
    //                             The mirror words are:
    //                             Part <=> traP, leveL <=> Level, sAw <=> wAs

    //