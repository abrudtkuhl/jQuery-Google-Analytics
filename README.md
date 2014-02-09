# jQuery Analytics

Easy declarative event tracking jQuery plugin for Google Analytics

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/abrudtkuhl/jQuery-Analytics/master/dist/jquery.analytics.min.js
[max]: https://raw.github.com/abrudtkuhl/jQuery-Analytics/master/dist/jquery.analytics.js
=======
jQuery Analytics
=========

jQuery.analytics is an Google Analytics jQuery plugin that is easy to implement and allows for declarative tagging to track events and pageviews.

  - Track Page Views
  - Track Click Events with easy declartive syntax
>>>>>>> 0f17dfdb69bc3613c6d691a9f6db280a32298810

Usage
=====
1. Include jQuery version 1.4.3 or later
2. Include jquery.analytics.js script
3. Initialize the plugin
    
    ```
    $(document).ready() {
        $(document).analytics();
    };
    ```

4. Add declarative data attributes to things you want to track events on
    ```<button data-track='{ "category" : "search", "action" : "button", "label" : "Search" }'>Search</button>```

Testing
=======
I recommend the excellent [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna?hl=en) Chrome extension to test what gets tracked via Google Analytics.


Dependencies
============
jQuery version 1.4.3 - see [data() support](http://api.jquery.com/data/#data-html5)



Google Analytics Support
========================
_As of 2/9/14 this jQuery plugin supports both versions of Google Analytics_

**[analytics.js](https://developers.google.com/analytics/devguides/collection/analyticsjs/)**  
Supports Google's latest version of Universal Analytics script called analytics.js which uses the "ga" object.

**[ga.js](https://developers.google.com/analytics/devguides/collection/gajs/)**  
This is the older version of Google Analytics tracking that uses the asynchronous syntax.

Author
======
[Andy Brudtkuhl](http://youmetandy.com)  
[@abrudtkuhl](http://twitter.com/abrudtkuhl)


## Release History
_(Nothing yet)_
