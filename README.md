jQuery Analytics
=========

jQuery.analytics is an Google Analytics jQuery plugin that is easy to implement and allows for declarative tagging to track events and pageviews.

  - Track Page Views
  - Track Click Events with easy declartive syntax

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

Author
======
[Andy Brudtkuhl](http://youmetandy.com)  
[@abrudtkuhl](http://twitter.com/abrudtkuhl)