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
