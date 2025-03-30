function assArrManipulator (inputArr) {

    inputArr.pop()
    let followers = {}

    for (let el of inputArr) {

        let commandArr = el.split(': ')
        let command = commandArr[0]
        let username = commandArr[1]

        switch (command) {

            case 'New follower':

            if (!followers[username]) {
                followers[username] = {likes: 0, comments: 0}
            }
            break

            case 'Like':
                if (!followers[username]) {
                    followers[username] = {likes: 0, comments: 0}
                }
                followers[username].likes += +commandArr[2]
            break

            case 'Comment':
                if (!followers[username]) {
                    followers[username] = {likes: 0, comments: 0}
                }
                followers[username].comments += 1
            break

            case 'Blocked':
                if (!followers[username]) {
                    console.log(username + " doesn't exist.")
                }
                else {
                    delete followers[username]
                }
            break
        }

    }
    console.log(Object.entries(followers).length + ' followers')

    Object.entries(followers).forEach(([key, values]) => {
        let count = values.likes + values.comments
            console.log(key + ': ' + count)
    }) 
}

assArrManipulator (["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])
    
    






    // Print:                  Amy doesn't exist.
    //                         3 followers
    //                         Amy: 1
    //                         Tom: 5
    //                         Ellie: 5

    //