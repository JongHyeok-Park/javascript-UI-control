const 버튼 = $('.tab-button');
const 내용 = $('.tab-content');
const 개수 = document.querySelectorAll('.tab-content').length;

for (let i = 0; i < 개수; i++) {
    버튼.eq(i).on('click', function () {
        버튼.removeClass('orange');
        버튼.eq(i).addClass('orange');
        내용.removeClass('show');
        내용.eq(i).addClass('show');
    })
}