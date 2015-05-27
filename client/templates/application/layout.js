Template.layout.onRendered(function() {
    this.find('.inner')._uihooks = {
        insertElement: function(node, next) {
            $(node)
                .hide()
                .insertBefore(next)
                .fadeIn();
            // $(node)
            //     .insertBefore(next)
            //     .addClass('animated')
            //     .addClass('slideInLeft')
            //     .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            //         $(this).removeClass('animated');
            //         $(this).removeClass('slideInLeft');
            //     });
        },
        removeElement: function(node) {
            $(node).fadeOut(function() {
                $(this).remove();
            });
            // $(node)
            //     .addClass('animated')
            //     .addClass('slideOutRight')
            //     .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            //         $(this).remove();
            //     });
        }
    }
});
