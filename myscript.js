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
setInterval(timer, 1000)

function timer() {
    count -= 1;
    $('#count').html(count);
    if (count == 0) {
        $('.alert-container').fadeOut();
        clearInterval(this);
    }
}

let now_slide = 0;

$('.slide-1').on('click', function () {
    $('.slide-container').css('transform', 'translateX(0)');
    now_slide = 0;
})

$('.slide-2').on('click', function () {
    $('.slide-container').css('transform', 'translateX(-33.33%)');
    now_slide = 1;
})

$('.slide-3').on('click', function () {
    $('.slide-container').css('transform', 'translateX(-66.66%)');
    now_slide = 2;
})

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