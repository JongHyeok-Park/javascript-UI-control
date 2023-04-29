$(window).scroll(function () {
    var height = $(window).scrollTop();

    // 570
    // 1130
    var y1 = -1 / 560 * height + 113 / 56;
    var z1 = -1 / 5600 * height + 617 / 560;

    // 1330
    // 1880
    var y2 = -1 / 550 * height + 3.418;
    var z2 = -1 / 5500 * height + 683 / 550;

    if (height > 570) {
        $('.card-box').eq(0).css('opacity', y1);
        $('.card-box').eq(0).css('transform', `scale(${z1})`);
    }
    if (height > 1330) {
        $('.card-box').eq(1).css('opacity', y2);
        $('.card-box').eq(1).css('transform', `scale(${z2})`);
    }



})