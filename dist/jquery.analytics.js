/*! jQuery Analytics - v0.1.0 - 2014-02-11
* https://github.com/abrudtkuhl/jQuery-Analytics
* Copyright (c) 2014 Andy Brudtkuhl; Licensed MIT */
/*global _gaq */
/*global ga */

(function($) {
  $.fn.analytics = function() {
    // google analytics is installed and running
    if (typeof(_gaq) === 'undefined' && typeof(_gaq) === 'undefined') {
      // return if GA is not installed or can't be found
      return this;
    }
    // return this for proper chaining
    return this.ready(function() {
      // event delegate to track clicks to events
      $('*[data-track]').on('click', this, function() {
        if (this.nodeName === 'A') {
          if (this.attr('target' !== 'blank')) {
            setTimeout(function() { location.href = this.href; }, 200);
            return false;
          }
        }

        // grab data
        var data = $(this).data('track');
        // push to google analytics
        if(typeof(_gaq) !== 'undefined') {
          _gaq.push(['_trackEvent', data.category, data.action, data.label, data.value]);
        }
        if (typeof(ga) !== 'undefined') {
          ga('send', 'event', data.category, data.action, data.label, data.value);
        }
      });
    });
  };
})(jQuery);