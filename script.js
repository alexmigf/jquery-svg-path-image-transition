$(document).ready(function() {

    /* Changes this values accordingly */
    var imagesCount = $('.image').length; // Image patterns
    var activeImage = '#image-active'; // Live image
    var imgFill = 'url(#img'; // Live image fill
    var imgClass = 'img-'; // Live image class

    var regex = new RegExp("\\b"+imgClass+"\\S+","g"); // Regular expression to find the live image class name

    /* Main function */
    function swapImages() {

        /* Replace Fill Function */
        function replaceFillFade(val) {
            $imgFill = $(activeImage).attr("fill", imgFill + val + ")"); // Replace fill with new image
            $(activeImage).hide(); // Hide image to perform transition
            $(activeImage).html($imgFill).fadeIn(1000); // Fade image transition
        }

        /* Replace Classes Function */
        function replaceClasses(val) {
            $(activeImage).removeClass(function (index, css) { // Remove class starting with imgClass
                return (css.match (regex) || []).join(' ');
            });
            $(activeImage).addClass(imgClass + val); // Add class imgClass+i
        }

        /* Iterate over total images and perform the changes */
        for(i = 1; i < imagesCount + 1; i++) {
            if( $(activeImage).hasClass(imgClass + i) ) {
                if(i != imagesCount) { // If not the last image
                    i+= 1;

                    replaceFillFade(i);
                    replaceClasses(i);

                } else { // If is the last image
                    replaceFillFade(1);
                    replaceClasses(1);
                }
            }
        }

    }

    /* Set interval for transition */
    setInterval(swapImages, 8000); // Define your own value

});