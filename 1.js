const scanf = require('scanf');

let a;

const promise = new Promise((resolve, reject) => {

    console.log('Terrorista o Antiterrorista? ');
    a = scanf('%s');

    let terrorista = true;
    let antiterrorista = false;

    if (a.toLowerCase() == 'terrorista') {
        setTimeout(() => {
            resolve('Corre para TT');
        }, 2000)
    }

    if (a.toLowerCase() == 'antiterrorista') {
        setTimeout(() => {
            reject('Corre para CT');
        }, 2000)
    }
});
promise
    .then((terrorista) => console.log(terrorista))
    .catch((antiterrorista) => console.log(antiterrorista))