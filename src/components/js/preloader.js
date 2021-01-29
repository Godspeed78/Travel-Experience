import $ from "jquery"
import jQuery from "jquery"


jQuery(document).ready(function () {
 
    var $window = $(window);

    $window.on( 'load', function () {
        $("#status").fadeOut();
        $("#preloader").delay(2000).fadeOut("slow");
        $("body").delay(350).css({ "overflow": "visible" });

        
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");

        /* END of Preloader */

    });
});