/*global document, jQuery */
(function () {
    'use strict';
    jQuery(document).on("mouseenter", "#footer", function () { jQuery("video").show(); });
    jQuery(document).on("mouseleave", "#footer", function () { jQuery("video").hide(); });
}());
