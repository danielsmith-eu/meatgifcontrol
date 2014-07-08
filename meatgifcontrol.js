// bind a click handler to all images, now and future
jQuery(document).on("click", "#chat-list img", function(evt) {
    var imgEl = evt.target;
    stopImage(imgEl);
});

// stop a single image by replacing it with a canvas element of a single grabbed frame from the anigif
var stopImage = function(imgElDOM) {
    try {
        var imgEl = jQuery(imgElDOM);

        var img = new Image();
        img.src = imgEl.attr("src");

        var cEl = document.createElement("canvas");
        cEl.width = img.width;
        cEl.height = img.height;

        var context = cEl.getContext('2d');
        context.drawImage(img, 0, 0); 
        jQuery(cEl).insertAfter(imgEl);

        jQuery(cEl).css("position", "absolute");
        jQuery(cEl).css("top", "0px");
        jQuery(cEl).css("left", "18px");

        imgEl.css("display", "none");

        // click the canvas to remove the canvas and bring the image back
        jQuery(cEl).click(function(evt){
            try {
                console.log("clicked canvas");
                imgEl.css("display", "block");
                jQuery(cEl).remove();
            } catch (e) {
                console.log(e.stack);
            }
        });
    } catch (e) {
        console.log(e.stack);
    }
}

// stop all images by iterating through them
var stopAllImages = function() {
    try {
        jQuery.each(jQuery("#chat-list img"), function(i, imgElDOM) {
            stopImage(imgElDOM);
        });
    } catch (e) {
        console.log(e.stack);
    }
};
