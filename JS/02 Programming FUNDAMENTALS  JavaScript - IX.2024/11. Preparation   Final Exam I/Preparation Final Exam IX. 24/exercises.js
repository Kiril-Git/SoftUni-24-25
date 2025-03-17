function solve(input) {
    let password = input.shift();

    let line = input.shift();

    while (line !== 'Done') {
        let [command, ...rest] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                let newPassword = '';

                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        newPassword += password[i];
                    }
                }
                password = newPassword;
                console.log(password);
                break;
                
            case 'Cut':
                let index = Number(rest[0]);
                let length = Number(rest[1]);

                let string = password.substring(index, index + length);
                password = password.replace(string, '');
                console.log(password);
                break;

            case 'Substitute':
                let stringTarget = rest[0];
                let replace = rest[1];

                if (password.includes(stringTarget)) {
                    while (password.includes(stringTarget)) {
                        password = password.replace(stringTarget, replace);
                    }
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }

                break;
        }

        line = input.shift();
    }

    console.log(`Your password is: ${password}`);
}

solve([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
