const 버튼 = $('.tab-button');
const 내용 = $('.tab-content');
const 개수 = document.querySelectorAll('.tab-content').length;

function openTabs(n) {
    버튼.removeClass('orange');
    버튼.eq(n).addClass('orange');
    내용.removeClass('show');
    내용.eq(n).addClass('show');
}

$('.list').click(function (e) {
    openTabs(e.target.dataset.id);
})

// for (let i = 0; i < 개수; i++) {
//     버튼.eq(i).on('click', function () {
//         openTabs(i);
//     })
// }

var car = ['소나타', 50000, 'white'];
var car2 = { name: '소나타', price: [50000, 3000, 4000], color: 'white' };

$('#car-name').html(car2.name);
$('#car-price').html(car2.price[0]);

var shirts = [95, 100, 105];
var pants = [28, 30, 32, 34];

$('#option').on('input', function (e) {
    if (this.value == '셔츠') {
        $('#size').removeClass('form-hide');
        let target = document.querySelector('#size');
        target.innerHTML = '';
        shirts.forEach((data) => {
            $(target).append(`<option>${data}</option>`);
        });
    } else if (this.value == '바지') {
        $('#size').removeClass('form-hide');
        var target = document.querySelector('#size');
        target.innerHTML = '';
        pants.forEach((data) => {
            // $(target).append(`<option>${data}</option>`);
            target.insertAdjacentHTML('beforeend', `<option>${data}</option>`);
            // 밑에 방법으로는 왜인지 안됨.
            // var a = document.createElement('option').innerHTML = data;
            // target.appendChild(a);
        });
    }
    else {
        $('#size').addClass('form-hide');
    }
})


///// HTML신규 삽입 하는 법 ////////

// var a = document.createElement('p');
// a.innerHTML = '안녕'
// a.classList.add('container');
// document.querySelector('#test').appendChild(a);

// var 템플릿 = '<p>안녕</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);
// $('#test').append(템플릿);