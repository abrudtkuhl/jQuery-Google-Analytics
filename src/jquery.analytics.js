/*
 * jquery.analytics
 * https://github.com/abrudtkuhl/jQuery-Analytics
 *
 * Copyright (c) 2014 Andy Brudtkuhl
 * Licensed under the MIT license.
 */

(function($) {
  $.fn.analytics = function() {
    // google analytics is installed and running
    if (typeof(_gaq) == 'undefined' && typeof(_gaq) == 'undefined') {
      console.error("In order to use this plugin, you must have Google Analytics installed");
      return this;
    }
    // return this for proper chaining
    return this.ready(function() {
      // event delegate to track clicks to events
      $('*[data-track]').on('click', this, function() {
        // grab data
        var data = $(this).data('track');
        // push to google analytics
        if(typeof(_gaq) != 'undefined')
          _gaq.push(['_trackEvent', data.category, data.action, data.label, data.value]);
        else if (typeof(ga) != 'undefined')
          ga('send', 'event', data.category, data.action, data.label, data.value);
      });
    });
  };
})(jQuery);