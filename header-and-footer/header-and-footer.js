var lastScrollTop = 0; // Keeps track of the last scroll position
var threshold = 75; // Adjust for sensitivity

$(window).scroll(function () {
    var st = $(this).scrollTop(); // Current scroll position

    // Check if scroll difference exceeds the threshold
    if (Math.abs(st - lastScrollTop) > threshold) {
        if (st < lastScrollTop) {
            // User scrolled up: Show header
            $('.Main_Header_Container').removeClass('hide-header').addClass('show-header');
        } else {
            // User scrolled down: Hide header
            $('.Main_Header_Container').removeClass('show-header').addClass('hide-header');
        }
        lastScrollTop = st; // Update the last scroll position
    }
});