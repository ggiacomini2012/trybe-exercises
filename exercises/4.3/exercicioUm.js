
n = 5;

for (let index = 0; index < n; index +=1) {
    console.log('*****');
}

let asterisco = '';
for (let index = 0; index < n; index +=1) {
    asterisco += '*';
    console.log(asterisco);
}

asterisco = '';
let espaco = '     ';
let bob = Array.from(espaco);
for (let index = 4; index >= 0; index -=1) {
    bob[index] =  '*';
    console.log(bob.join(''));
}

bob = Array.from(espaco);

for (let index = 2; index >= 0; index -=1) {
    if (bob[1] === '*') {
        bob[0] = '*';
        bob[4] = '*'
    }
    if (bob[2] === '*') {
        bob[1] = '*';
        bob[3] = '*'
    }
    
    bob[2] =  '*';

    console.log(bob.join(''));
}
