var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' },
];

function insertCard(data) {
    var productCard = `<div class="col-sm-4">                                 \
            <img src="https://via.placeholder.com/600" alt="" class="w-100">  \
            <h5>${data.title}</h5>                                         \
            <p>가격 : ${data.price}</p>                                    \
        </div>`;
    document.querySelector('.row').insertAdjacentHTML('beforeend', productCard);
}

products.forEach((product) => {
    insertCard(product);
})

let clickCount = 0;
document.querySelector('button').addEventListener('click', function () {
    clickCount += 1;
    fetch(`https://codingapple1.github.io/js/more${clickCount}.json`)
        .then(res => res.json())
        .then(data => {
            data.forEach((product) => {
                insertCard(product);
            })
        })
        .catch(error => {
            console.log('실패함\n' + error);
        })
})



/// Vanilla JS로 GET 호출
// fetch('https://codingapple1.github.io/price.json')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log('실패함');
//     })

/// jquery로 GET호출(ajax)
// $.get('https://codingapple1.github.io/price.json').done(function (data) {
//     console.log(data.pruc);
// }).fail(function () {
//     console.log('실패함ㅋ');
// })
