var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' },
];

let 정렬 = document.querySelector('#sortRule');
정렬.addEventListener('input', function () {
    if (this.value == '가격순 정렬') {
        products.sort(function (a, b) {
            return a.price - b.price;
        });
        document.querySelector('.row').innerHTML = '';
        products.forEach((data) => {
            insertCard(data);
        })
    } else if (this.value == '이름순 정렬') {
        products.sort(function (a, b) {
            if (b.title < a.title)
                return 1;
            else
                return -1;
        });
        document.querySelector('.row').innerHTML = '';
        products.forEach((data) => {
            insertCard(data);
        });
    }
});

document.querySelector('#priceFilter').addEventListener('click', () => {
    let price = document.querySelector('#price').value;
    var newArr = products.filter(a => a.price <= price);
    document.querySelector('.row').innerHTML = '';
    newArr.forEach((data) => {
        insertCard(data);
    });
})

function insertCard(data) {
    var productCard = `<div class="col-sm-4 mb-3">                                 
            <img src="https://via.placeholder.com/600" alt="" class="w-100">  
            <h5>${data.title}</h5>                                            
            <p>가격 : ${data.price}</p>
            <button class="buy" onclick="loadOnLocal(this)">담기</button>                                       
        </div>`;
    document.querySelector('.row').insertAdjacentHTML('beforeend', productCard);
}

products.forEach((product) => {
    insertCard(product);
})

// var arr = [1, 2, 3];
// var newArr = JSON.stringify(arr);
// localStorage.setItem('num', newArr);


// var 꺼낸거 = localStorage.getItem('num');
// console.log(JSON.parse(꺼낸거)[1]);

function loadOnLocal(button) {
    let title = button.previousElementSibling.previousElementSibling.innerHTML;

    // if (cart.find(a => a == title) != title) {
    //     cart.push(title);
    //     localStorage.setItem('cart', JSON.stringify(cart));
    // }

    if (localStorage.getItem('cart') != null) {
        let newArr = JSON.parse(localStorage.cart);
        if (newArr.find(a => a == title) != title) {
            newArr.push(title);
            localStorage.setItem('cart', JSON.stringify(newArr));
        }
    } else {
        localStorage.setItem('cart', JSON.stringify([title]));
    }
}

let clickCount = 0;
document.querySelector('#more').addEventListener('click', function () {
    clickCount += 1;
    fetch(`https://codingapple1.github.io/js/more${clickCount}.json`)
        .then(res => res.json())
        .then(data => {
            data.forEach((product) => {
                products.push(product);
                insertCard(product);
            })
        })
        .catch(error => {
            console.log('실패함\n' + error);
        })
});


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
