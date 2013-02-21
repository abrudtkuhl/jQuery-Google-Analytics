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
    return this.ready(function() {
      $('*[data-track]').click(function() {
        var data = $(this).data('track');
        _gaq.push(['_trackEvent', data.category, data.action, data.label, data.value]);
      });
    });
  };
})(jQuery);