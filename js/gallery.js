// Burger Gallery Fuctionality
jQuery('.photo-thumbnails .thumbnail').click(function() {
    jQuery('.photo-thumbnails .thumbnail').removeClass('current');
    jQuery(this).addClass('current');
    var path = jQuery(this).find('img').attr('src');
    jQuery('#big-photo img').attr('src', path);
});

// These fuctions were inspired by w3lessons.info
//
// When a thumbnail is clicked, the JQuery changes the css to display the selcted photo as the "big-photo" while also changing the css of the thumbnail to a "selcted" version of itself.
