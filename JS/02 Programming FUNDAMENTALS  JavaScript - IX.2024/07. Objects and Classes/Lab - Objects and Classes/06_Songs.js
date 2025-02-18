function songsClassifier (inputArr) {


    class Song {

        constructor (typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }

        print() {
            console.log(this.name)
        }
    }




    inputArr.shift()
    let genre = inputArr.pop()

    for (let el of inputArr) {

        let songArr = el.split('_')
        let songGenre = songArr[0]
        let name = songArr[1]
        let time = songArr[2]

        let song = new Song(songGenre, name, time)

        if ( genre === 'all') {
            songGenre = genre
        }

        if (songGenre === genre) {
            song.print()
        }
    }
}

songsClassifier ([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])



// print:              Replay
//                     Photoshop
//