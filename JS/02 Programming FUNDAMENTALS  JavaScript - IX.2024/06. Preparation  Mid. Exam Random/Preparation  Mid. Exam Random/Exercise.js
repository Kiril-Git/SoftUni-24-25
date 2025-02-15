function decript(inputArr) {
    let encriptedMessage = inputArr.shift().split('');
    let commandStr = inputArr.shift();

    while (commandStr !== 'Decode') {
        let commandArr = commandStr.split('|');
        let command = commandArr[0];

        switch (command) {

            case 'Move':
                let iters = Number(commandArr[1]);
                iters = iters % encriptedMessage.length;
                
                if (iters > 0) {
                    let movedPart = encriptedMessage.splice(0, iters);
                    encriptedMessage.push(...movedPart);
                }
                break;

            case 'Insert':
                let ind = Math.max(0, Math.min(Number(commandArr[1]), encriptedMessage.length));
                let el = commandArr[2];
                encriptedMessage.splice(ind, 0, ...el.split(''));
                break;

            case 'ChangeAll':
                let oldChar = commandArr[1];
                let replacement = commandArr[2];
                for (let i = 0; i < encriptedMessage.length; i++) {
                    if (encriptedMessage[i] === oldChar) {
                        encriptedMessage[i] = replacement;
                    }
                }
                break;
        }

        commandStr = inputArr.shift();
    }

    console.log('The decrypted message is: ' + encriptedMessage.join(''));
}


decript([ 'zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode', ] )