/**
 * jquery.analytics.js - https://github.com/abrudtkuhl/jQuery-Analytics
 * Google analytics implementation for jQuery.
 *
 * Copyright (c) 2013 Andy Brudtkuhl (http://youmetandy.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/21
**/

(function($) {
  $.fn.analytics = function() {
    // check if _gaq google analytics array is defined first
    if (typeof(_gaq) == 'undefined') {
      console.error("In order to use this plugin, you must have Google Analytics installed");
      return this;
    }
    // return this for proper chaining
    return this.ready(function() {
      // event delegate to track clicks to events
      $('*[data-track').on('click', this, function() {
        // grab data
        var data = $(this).data('track');
        // push to google analytics
        _gaq.push(['_trackEvent', data.category, data.action, data.label, data.value]);
      });
    });
  };
})(jQuery);