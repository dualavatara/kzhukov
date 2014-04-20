/**
 * Created by dualavatara on 20.04.14.
 */
/*global jQuery */
var template = function($) {
    "use strict";
    var ZTemplate = function () {};
    ZTemplate.prototype.setDOM = function(selector) {
        this.dom = $(selector);
    };
    ZTemplate.prototype.parse = function(data) {
        var $this = this,
            exp = /%\w+?%/mg;
        $.each(data, function(key, val) {
            var html = $this.dom.parent().html();
            html = html.replace(exp, val);
            $this.parseddom = $(html);
        });
        return $this.parseddom;
    };
    window.ZTemplate = ZTemplate;
};
template(jQuery);