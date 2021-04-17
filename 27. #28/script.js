// fetch('./data.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });

// fetch('./data2.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data2) => {
//         console.log(data2);
//     });


function getFile(file) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', file, true);
        xhr.send();

        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState === 4) {
                xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject(xhr.statusText);
            }
        })
    })
}

let userA = getFile('./data.json');
let users = [];

userA
    .then(
        userA => {
            console.log(userA);
            users.push(userA);
            return getFile('./data2.json');
        },
        data => {
            console.log(data)
        }
    )

    .then(
        userB => {
            console.log(userB);
            users.push(userB);

            return users
        }
    )

    .then(
        users => {
            let userChild = users.map(user => user.children);
            console.log(userChild.flat());
        }
    )