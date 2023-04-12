////////////////////////////////
/////// 로그인창 내용 start //////
////////////////////////////////
// 전송버튼 누르면 input에 입력한 값이 공백이면 알림창 띄우기
$('form').on('submit', function (e) {
    var name = $('#name').val();
    var password = $('#pw').val();
    if (name == '') {
        alert('새끼... 기열!');
        e.preventDefault();
    } else if (/[A-Z]/.test(name)) {
        alert('대문자 금지!!');
        e.preventDefault();
    } else if (password == '') {
        alert('새끼... 비번은? 기열!!!!!');
        e.preventDefault();
    }
})

// name에 입력한 값 길이 검사
$('#name').on('input', function () {
    var name = $('#name').val();
    if (name.length < 3) {
        console.log('바뀜');
        $('#len-check').css('display', 'block');
    } else {
        $('#len-check').css('display', 'none');
    }
})
//////////////////////////////
/////// 로그인창 내용 end //////
//////////////////////////////

const 화면높이 = document.querySelector('html').scrollHeight - document.querySelector('html').clientHeight - 70;



$(window).on('scroll', function () {
    let 현재높이 = $('html').scrollTop();
    let line = 현재높이 / 화면높이 * 100;
    $('.scroll-line').css('width', line + '%')
    if ($(window).scrollTop()) {
        $('.navbar').css('position', 'fixed');
    }
    else {
        $('.navbar').css('position', 'relative');
    }
})

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.navbar-brand').css('font-size', '15px');
    } else {
        $('.navbar-brand').css('font-size', '25px');
    }
})
let 작은화면높이 = document.getElementsByClassName('lorem')[0].clientHeight;
let 높이 = document.getElementsByClassName('lorem')[0].scrollHeight - 작은화면높이;
$('#scroll-height-indicator').html(높이);
$('.lorem').on('scroll', function () {

    let 스크롤양 = $('.lorem').scrollTop();
    $('#scroll-indicator').html(스크롤양.toFixed(2));
    if ($('.lorem').scrollTop() + 작은화면높이 > document.getElementsByClassName('lorem')[0].scrollHeight - 10) {
        $('.lorem').css('background-color', 'red');
    } else {
        $('.lorem').css('background-color', 'white');
    }
})

$('.badge').on('click', function () {
    if ($('.badge').html() == 'Dark 🔄️') {
        $('.badge').html('Light 🔄️');
    } else {
        $('.badge').html('Dark 🔄️');
    }
})

$('#login').on('click', function () {
    $('.black-bg').addClass('show');
})

$('#close').on('click', function () {
    $('.black-bg').removeClass('show');
})

$('.navbar-toggler').on('click', function () {
    if ($('#test1').hasClass('show-list')) {
        $('#test1').removeClass('show-list');
    } else {
        $('#test1').addClass('show-list');
    }
})

var count = 5
setInterval(timer, 300)

function timer() {
    count -= 1;
    $('#count').html(count);
    if (count == 0) {
        $('.alert-container').fadeOut();
        clearInterval(this);
    }
}

let now_slide = 0;

const 개수 = document.querySelectorAll('.slide-direct').length;
for (let i = 0; i < 개수; i++) {
    $('.slide-direct').eq(i).on('click', function () {
        $('.slide-container').css('transform', 'translateX(' + (i * (-33.33)) + '%)');
        now_slide = i;
    })
}

$('.next-slide').on('click', function () {
    if (now_slide >= 2)
        now_slide = -1;
    $('.slide-container').css('transform', 'translateX(-' + ((now_slide + 1) * 33.33) + '%)');
    now_slide += 1;
})

$('.before-slide').on('click', function () {
    if (now_slide <= 0)
        now_slide = 3;
    $('.slide-container').css('transform', 'translateX(-' + ((now_slide - 1) * 33.33) + '%)');
    now_slide -= 1;
})