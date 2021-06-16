$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var images = ['sign-up-bg1.png', 'sign-up-bg2.png', 'sign-up-bg3.png']
    var quotes = ['Your body is your most precious tool, so “Stay Healthy, Stay Safe”', 'Daily exercise with a good diet plan, helps to keep your body balance. ', 'Welcome as you are about to begin your fitness journey. Remember “Never Give Up”']

    $(".next").click(function () {

        current_fs = $(this).parent().parent();
        next_fs = $(this).parent().parent().next();

        $("#progressbar li .circle").eq($("fieldset").index(current_fs)).removeClass("active");
        //Add Class Active
        $("#progressbar li .circle").eq($("fieldset").index(next_fs)).addClass("active");
        // change image
        document.getElementById('img').src = `/assets/images/${images[$("fieldset").index(next_fs)]}`;
        document.getElementById('quote').innerText = quotes[$("fieldset").index(next_fs)];
        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
    });

    $(".previous").click(function () {

        current_fs = $(this).parent().parent();
        previous_fs = $(this).parent().parent().prev();

        //Remove class active
        $("#progressbar li .circle").eq($("fieldset").index(current_fs)).removeClass("active");
        $("#progressbar li .circle").eq($("fieldset").index(previous_fs)).addClass("active");
        document.getElementById('img').src = `/assets/images/${images[$("fieldset").index(previous_fs)]}`;
        document.getElementById('quote').innerText = quotes[$("fieldset").index(previous_fs)];

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
    });


});