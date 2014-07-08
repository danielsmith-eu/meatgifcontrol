/*global document, jQuery, Image */
(function () {
    'use strict';

    // stop a single image by replacing it with a canvas element of a single grabbed frame from the anigif
    var stopImage = function (imgElDOM) {
        try {
            var imgEl = jQuery(imgElDOM),
                img = new Image(),
                cEl = document.createElement("canvas"),
                context = cEl.getContext('2d');

            img.src = imgEl.attr("src");

            cEl.width = img.width;
            cEl.height = img.height;

            context.drawImage(img, 0, 0);
            jQuery(cEl).insertAfter(imgEl);

            jQuery(cEl).css("position", "absolute");
            jQuery(cEl).css("top", "0px");
            jQuery(cEl).css("left", "18px");

            imgEl.css("display", "none");

            // click the canvas to remove the canvas and bring the image back
            jQuery(cEl).click(function () {
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
    },

    // stop all images by iterating through them
        stopAllImages = function () {
            try {
                jQuery.each(jQuery("#chat-list img"), function (i, imgElDOM) {
                    stopImage(imgElDOM);
                });
            } catch (e) {
                console.log(e.stack);
            }
        };

    // bind a click handler to all images, now and future
    jQuery(document).on("click", "#chat-list img", function (evt) {
        var imgEl = evt.target;
        stopImage(imgEl);
    });

}());
