/**
 * Created by dualavatara on 20.04.14.
 */

/*global jQuery */
/*global ZTemplate */
var main = function ($) {
    "use strict";
    var ZApplication = function() {};

    ZApplication.prototype.main = function() {
        var test = new ZTemplate();
        test.setDOM($('.test'));
        $('.test').replaceWith(test.parse({someshit : 'Test string'}));
    };

    $(document).ready(function() {
        window.zapp = new ZApplication();
        window.zapp.main();
    });
};
main(jQuery);