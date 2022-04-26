$(function() {
    var $class = $('.parallaxBgA');
    var $classB = $('.parallaxBgB');
    $(window).on('scroll', function () {
        var scroll = $(document).scrollTop();
        $class.css({
            'background-position':'50% '+(-.4*scroll)+'px'
        });

        $classB.css({
            'background-position':'75% '+(-.4*scroll)+'px'
        });
    });
});