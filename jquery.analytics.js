/* jquery analytics plugin */

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

